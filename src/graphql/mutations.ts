/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const updateFavorite = /* GraphQL */ `mutation UpdateFavorite(
  $input: UpdateFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  updateFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFavoriteMutationVariables,
  APITypes.UpdateFavoriteMutation
>;
export const createInsect = /* GraphQL */ `mutation CreateInsect(
  $input: CreateInsectInput!
  $condition: ModelInsectConditionInput
) {
  createInsect(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInsectMutationVariables,
  APITypes.CreateInsectMutation
>;
export const updateInsect = /* GraphQL */ `mutation UpdateInsect(
  $input: UpdateInsectInput!
  $condition: ModelInsectConditionInput
) {
  updateInsect(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInsectMutationVariables,
  APITypes.UpdateInsectMutation
>;
export const deleteInsect = /* GraphQL */ `mutation DeleteInsect(
  $input: DeleteInsectInput!
  $condition: ModelInsectConditionInput
) {
  deleteInsect(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInsectMutationVariables,
  APITypes.DeleteInsectMutation
>;
export const createFavorite = /* GraphQL */ `mutation CreateFavorite(
  $input: CreateFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  createFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFavoriteMutationVariables,
  APITypes.CreateFavoriteMutation
>;
export const deleteFavorite = /* GraphQL */ `mutation DeleteFavorite(
  $input: DeleteFavoriteInput!
  $condition: ModelFavoriteConditionInput
) {
  deleteFavorite(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFavoriteMutationVariables,
  APITypes.DeleteFavoriteMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    tagName
    usageCount
    createdAt
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
