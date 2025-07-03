/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
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
`;
export const createInsect = /* GraphQL */ `
  mutation CreateInsect(
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
`;
export const updateInsect = /* GraphQL */ `
  mutation UpdateInsect(
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
`;
export const deleteInsect = /* GraphQL */ `
  mutation DeleteInsect(
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
`;
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
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
`;
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
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
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
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
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
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
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
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
`;
