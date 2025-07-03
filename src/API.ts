/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateFavoriteInput = {
  id: string,
  insectId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
};

export type ModelFavoriteConditionInput = {
  insectId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteConditionInput | null > | null,
  or?: Array< ModelFavoriteConditionInput | null > | null,
  not?: ModelFavoriteConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Favorite = {
  __typename: "Favorite",
  id: string,
  insectId: string,
  userId: string,
  createdAt?: string | null,
  insect?: Insect | null,
  updatedAt: string,
  owner?: string | null,
};

export type Insect = {
  __typename: "Insect",
  id: string,
  owner?: string | null,
  userId: string,
  imageUrl: string,
  commonName: string,
  scientificName: string,
  familyName?: string | null,
  location?: Location | null,
  dateObserved: string,
  tags?: Array< string > | null,
  aiSummaryS3Url?: string | null,
  userNotesS3Url?: string | null,
  isPublic: boolean,
  favoriteCount: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  favorites?: ModelFavoriteConnection | null,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lng: number,
};

export type ModelFavoriteConnection = {
  __typename: "ModelFavoriteConnection",
  items:  Array<Favorite | null >,
  nextToken?: string | null,
};

export type CreateInsectInput = {
  id?: string | null,
  owner?: string | null,
  userId: string,
  imageUrl: string,
  commonName: string,
  scientificName: string,
  familyName?: string | null,
  location?: LocationInput | null,
  dateObserved: string,
  tags?: Array< string > | null,
  aiSummaryS3Url?: string | null,
  userNotesS3Url?: string | null,
  isPublic: boolean,
  favoriteCount: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type LocationInput = {
  lat: number,
  lng: number,
};

export type ModelInsectConditionInput = {
  owner?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  commonName?: ModelStringInput | null,
  scientificName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  dateObserved?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  aiSummaryS3Url?: ModelStringInput | null,
  userNotesS3Url?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  favoriteCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInsectConditionInput | null > | null,
  or?: Array< ModelInsectConditionInput | null > | null,
  not?: ModelInsectConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateInsectInput = {
  id: string,
  owner?: string | null,
  userId?: string | null,
  imageUrl?: string | null,
  commonName?: string | null,
  scientificName?: string | null,
  familyName?: string | null,
  location?: LocationInput | null,
  dateObserved?: string | null,
  tags?: Array< string > | null,
  aiSummaryS3Url?: string | null,
  userNotesS3Url?: string | null,
  isPublic?: boolean | null,
  favoriteCount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteInsectInput = {
  id: string,
};

export type CreateFavoriteInput = {
  id?: string | null,
  insectId: string,
  userId: string,
  createdAt?: string | null,
};

export type DeleteFavoriteInput = {
  id: string,
};

export type CreateTagInput = {
  tagName: string,
  usageCount?: number | null,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelTagConditionInput = {
  tagName?: ModelIDInput | null,
  usageCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Tag = {
  __typename: "Tag",
  tagName: string,
  usageCount?: number | null,
  createdAt?: string | null,
  id: string,
  updatedAt: string,
};

export type UpdateTagInput = {
  tagName?: string | null,
  usageCount?: number | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteTagInput = {
  id: string,
};

export type ModelInsectFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  commonName?: ModelStringInput | null,
  scientificName?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  dateObserved?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  aiSummaryS3Url?: ModelStringInput | null,
  userNotesS3Url?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  favoriteCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInsectFilterInput | null > | null,
  or?: Array< ModelInsectFilterInput | null > | null,
  not?: ModelInsectFilterInput | null,
};

export type ModelInsectConnection = {
  __typename: "ModelInsectConnection",
  items:  Array<Insect | null >,
  nextToken?: string | null,
};

export type ModelFavoriteFilterInput = {
  id?: ModelIDInput | null,
  insectId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFavoriteFilterInput | null > | null,
  or?: Array< ModelFavoriteFilterInput | null > | null,
  not?: ModelFavoriteFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTagFilterInput = {
  tagName?: ModelIDInput | null,
  usageCount?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInsectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  commonName?: ModelSubscriptionStringInput | null,
  scientificName?: ModelSubscriptionStringInput | null,
  familyName?: ModelSubscriptionStringInput | null,
  dateObserved?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  aiSummaryS3Url?: ModelSubscriptionStringInput | null,
  userNotesS3Url?: ModelSubscriptionStringInput | null,
  isPublic?: ModelSubscriptionBooleanInput | null,
  favoriteCount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInsectFilterInput | null > | null,
  or?: Array< ModelSubscriptionInsectFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFavoriteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  insectId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
  or?: Array< ModelSubscriptionFavoriteFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTagFilterInput = {
  tagName?: ModelSubscriptionIDInput | null,
  usageCount?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type UpdateFavoriteMutationVariables = {
  input: UpdateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type UpdateFavoriteMutation = {
  updateFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateInsectMutationVariables = {
  input: CreateInsectInput,
  condition?: ModelInsectConditionInput | null,
};

export type CreateInsectMutation = {
  createInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateInsectMutationVariables = {
  input: UpdateInsectInput,
  condition?: ModelInsectConditionInput | null,
};

export type UpdateInsectMutation = {
  updateInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteInsectMutationVariables = {
  input: DeleteInsectInput,
  condition?: ModelInsectConditionInput | null,
};

export type DeleteInsectMutation = {
  deleteInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateFavoriteMutationVariables = {
  input: CreateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type CreateFavoriteMutation = {
  createFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFavoriteMutationVariables = {
  input: DeleteFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type DeleteFavoriteMutation = {
  deleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type GetInsectQueryVariables = {
  id: string,
};

export type GetInsectQuery = {
  getInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListInsectsQueryVariables = {
  filter?: ModelInsectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInsectsQuery = {
  listInsects?:  {
    __typename: "ModelInsectConnection",
    items:  Array< {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFavoriteQueryVariables = {
  id: string,
};

export type GetFavoriteQuery = {
  getFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFavoritesQueryVariables = {
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoritesQuery = {
  listFavorites?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      insectId: string,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FavoritesByInsectIdAndUserIdQueryVariables = {
  insectId: string,
  userId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FavoritesByInsectIdAndUserIdQuery = {
  favoritesByInsectIdAndUserId?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      insectId: string,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FavoritesByUserIdAndInsectIdQueryVariables = {
  userId: string,
  insectId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FavoritesByUserIdAndInsectIdQuery = {
  favoritesByUserIdAndInsectId?:  {
    __typename: "ModelFavoriteConnection",
    items:  Array< {
      __typename: "Favorite",
      id: string,
      insectId: string,
      userId: string,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      tagName: string,
      usageCount?: number | null,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInsectSubscriptionVariables = {
  filter?: ModelSubscriptionInsectFilterInput | null,
  owner?: string | null,
};

export type OnCreateInsectSubscription = {
  onCreateInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateInsectSubscriptionVariables = {
  filter?: ModelSubscriptionInsectFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInsectSubscription = {
  onUpdateInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteInsectSubscriptionVariables = {
  filter?: ModelSubscriptionInsectFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInsectSubscription = {
  onDeleteInsect?:  {
    __typename: "Insect",
    id: string,
    owner?: string | null,
    userId: string,
    imageUrl: string,
    commonName: string,
    scientificName: string,
    familyName?: string | null,
    location?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    dateObserved: string,
    tags?: Array< string > | null,
    aiSummaryS3Url?: string | null,
    userNotesS3Url?: string | null,
    isPublic: boolean,
    favoriteCount: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnCreateFavoriteSubscription = {
  onCreateFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFavoriteSubscription = {
  onUpdateFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFavoriteSubscription = {
  onDeleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    insectId: string,
    userId: string,
    createdAt?: string | null,
    insect?:  {
      __typename: "Insect",
      id: string,
      owner?: string | null,
      userId: string,
      imageUrl: string,
      commonName: string,
      scientificName: string,
      familyName?: string | null,
      dateObserved: string,
      tags?: Array< string > | null,
      aiSummaryS3Url?: string | null,
      userNotesS3Url?: string | null,
      isPublic: boolean,
      favoriteCount: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    tagName: string,
    usageCount?: number | null,
    createdAt?: string | null,
    id: string,
    updatedAt: string,
  } | null,
};
