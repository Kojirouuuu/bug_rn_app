/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInsect = /* GraphQL */ `query GetInsect($id: ID!) {
  getInsect(id: $id) {
    id
    owner
    userId
    imageUrl
    commonName
    scientificName
    familyName
    location {
      lat
      lng
      __typename
    }
    dateObserved
    tags
    aiSummaryS3Url
    userNotesS3Url
    isPublic
    favoriteCount
    createdAt
    updatedAt
    favorites {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetInsectQueryVariables, APITypes.GetInsectQuery>;
export const listInsects = /* GraphQL */ `query ListInsects(
  $filter: ModelInsectFilterInput
  $limit: Int
  $nextToken: String
) {
  listInsects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      userId
      imageUrl
      commonName
      scientificName
      familyName
      dateObserved
      tags
      aiSummaryS3Url
      userNotesS3Url
      isPublic
      favoriteCount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInsectsQueryVariables,
  APITypes.ListInsectsQuery
>;
export const getFavorite = /* GraphQL */ `query GetFavorite($id: ID!) {
  getFavorite(id: $id) {
    id
    insectId
    userId
    createdAt
    insect {
      id
      owner
      userId
      imageUrl
      commonName
      scientificName
      familyName
      dateObserved
      tags
      aiSummaryS3Url
      userNotesS3Url
      isPublic
      favoriteCount
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFavoriteQueryVariables,
  APITypes.GetFavoriteQuery
>;
export const listFavorites = /* GraphQL */ `query ListFavorites(
  $filter: ModelFavoriteFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      insectId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFavoritesQueryVariables,
  APITypes.ListFavoritesQuery
>;
export const favoritesByInsectIdAndUserId = /* GraphQL */ `query FavoritesByInsectIdAndUserId(
  $insectId: ID!
  $userId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFavoriteFilterInput
  $limit: Int
  $nextToken: String
) {
  favoritesByInsectIdAndUserId(
    insectId: $insectId
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      insectId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FavoritesByInsectIdAndUserIdQueryVariables,
  APITypes.FavoritesByInsectIdAndUserIdQuery
>;
export const favoritesByUserIdAndInsectId = /* GraphQL */ `query FavoritesByUserIdAndInsectId(
  $userId: ID!
  $insectId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFavoriteFilterInput
  $limit: Int
  $nextToken: String
) {
  favoritesByUserIdAndInsectId(
    userId: $userId
    insectId: $insectId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      insectId
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FavoritesByUserIdAndInsectIdQueryVariables,
  APITypes.FavoritesByUserIdAndInsectIdQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      tagName
      usageCount
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
