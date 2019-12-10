/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReferrals = `query GetReferrals {
  getReferrals {
    id
    siteName
    siteLink
  }
}
`;
export const getReferral = `query GetReferral($id: ID!) {
  getReferral(id: $id) {
    id
    siteName
    siteLink
  }
}
`;
export const listReferrals = `query ListReferrals(
  $filter: ModelReferralFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      siteName
      siteLink
    }
    nextToken
  }
}
`;
