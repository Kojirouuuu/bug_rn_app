import { generateClient } from '@aws-amplify/api';
import { listInsects, getInsect } from '@/src/graphql/queries';
import { ListInsectsQuery, GetInsectQuery } from '@/src/API';
import { InsectEntry } from '@/store/insectStore';

const client = generateClient();

// GraphQLのInsect型をローカルのInsectEntry型に変換する関数
const transformGraphQLInsect = (graphqlInsect: any): InsectEntry => {
  return {
    id: graphqlInsect.id,
    imageUri: graphqlInsect.imageUrl,
    speciesName: graphqlInsect.scientificName,
    commonName: graphqlInsect.commonName,
    family: graphqlInsect.familyName,
    location: graphqlInsect.location
      ? `${graphqlInsect.location.lat}, ${graphqlInsect.location.lng}`
      : undefined,
    coordinates: graphqlInsect.location
      ? {
          latitude: graphqlInsect.location.lat,
          longitude: graphqlInsect.location.lng,
        }
      : undefined,
    date: graphqlInsect.dateObserved,
    notes: graphqlInsect.userNotesS3Url, // S3のURLから取得する必要がある場合
    tags: graphqlInsect.tags || [],
    createdAt: graphqlInsect.createdAt || new Date().toISOString(),
    updatedAt: graphqlInsect.updatedAt || new Date().toISOString(),
  };
};

// 全てのinsectsを取得する関数
export const fetchAllInsects = async (): Promise<InsectEntry[]> => {
  try {
    const response = (await client.graphql({
      query: listInsects,
      variables: {
        limit: 1000, // 必要に応じて調整
      },
    })) as { data: ListInsectsQuery };

    if (response.data.listInsects?.items) {
      return response.data.listInsects.items
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .map(transformGraphQLInsect);
    }

    return [];
  } catch (error) {
    console.error('Error fetching insects:', error);
    throw error;
  }
};

// 特定のinsectを取得する関数
export const fetchInsectById = async (
  id: string
): Promise<InsectEntry | null> => {
  try {
    const response = (await client.graphql({
      query: getInsect,
      variables: { id },
    })) as { data: GetInsectQuery };

    if (response.data.getInsect) {
      return transformGraphQLInsect(response.data.getInsect);
    }

    return null;
  } catch (error) {
    console.error('Error fetching insect:', error);
    throw error;
  }
};

// 最近のinsectsを取得する関数
export const fetchRecentInsects = async (
  limit: number = 5
): Promise<InsectEntry[]> => {
  try {
    const response = (await client.graphql({
      query: listInsects,
      variables: {
        limit,
        // 必要に応じてソート条件を追加
      },
    })) as { data: ListInsectsQuery };

    if (response.data.listInsects?.items) {
      return response.data.listInsects.items
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .map(transformGraphQLInsect)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return [];
  } catch (error) {
    console.error('Error fetching recent insects:', error);
    throw error;
  }
};

// 統計情報を取得する関数
export const fetchInsectStats = async (): Promise<{
  totalEntries: number;
  totalSpecies: number;
  uniqueLocations: number;
  thisMonth: number;
}> => {
  try {
    const insects = await fetchAllInsects();

    const now = new Date();
    const thisMonth = insects.filter((insect) => {
      const insectDate = new Date(insect.createdAt);
      return (
        insectDate.getMonth() === now.getMonth() &&
        insectDate.getFullYear() === now.getFullYear()
      );
    }).length;

    const uniqueSpecies = new Set(insects.map((insect) => insect.speciesName))
      .size;
    const uniqueLocations = new Set(
      insects
        .filter((insect) => insect.location)
        .map((insect) => insect.location)
    ).size;

    return {
      totalEntries: insects.length,
      totalSpecies: uniqueSpecies,
      uniqueLocations,
      thisMonth,
    };
  } catch (error) {
    console.error('Error fetching insect stats:', error);
    throw error;
  }
};
