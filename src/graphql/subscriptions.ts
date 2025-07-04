/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInsect = /* GraphQL */ `subscription OnCreateInsect(
  $filter: ModelSubscriptionInsectFilterInput
  $owner: String
) {
  onCreateInsect(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInsectSubscriptionVariables,
  APITypes.OnCreateInsectSubscription
>;
export const onUpdateInsect = /* GraphQL */ `subscription OnUpdateInsect(
  $filter: ModelSubscriptionInsectFilterInput
  $owner: String
) {
  onUpdateInsect(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInsectSubscriptionVariables,
  APITypes.OnUpdateInsectSubscription
>;
export const onDeleteInsect = /* GraphQL */ `subscription OnDeleteInsect(
  $filter: ModelSubscriptionInsectFilterInput
  $owner: String
) {
  onDeleteInsect(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInsectSubscriptionVariables,
  APITypes.OnDeleteInsectSubscription
>;
export const onCreateFavorite = /* GraphQL */ `subscription OnCreateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onCreateFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFavoriteSubscriptionVariables,
  APITypes.OnCreateFavoriteSubscription
>;
export const onUpdateFavorite = /* GraphQL */ `subscription OnUpdateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onUpdateFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFavoriteSubscriptionVariables,
  APITypes.OnUpdateFavoriteSubscription
>;
export const onDeleteFavorite = /* GraphQL */ `subscription OnDeleteFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onDeleteFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFavoriteSubscriptionVariables,
  APITypes.OnDeleteFavoriteSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
