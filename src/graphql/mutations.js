/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addReferral = `mutation AddReferral($siteName: String, $siteLink: String) {
  addReferral(siteName: $siteName, siteLink: $siteLink) {
    id
    siteName
    siteLink
  }
}
`;
export const createReferral = `mutation CreateReferral(
  $input: CreateReferralInput!
  $condition: ModelReferralConditionInput
) {
  createReferral(input: $input, condition: $condition) {
    id
    siteName
    siteLink
  }
}
`;
export const updateReferral = `mutation UpdateReferral(
  $input: UpdateReferralInput!
  $condition: ModelReferralConditionInput
) {
  updateReferral(input: $input, condition: $condition) {
    id
    siteName
    siteLink
  }
}
`;
export const deleteReferral = `mutation DeleteReferral(
  $input: DeleteReferralInput!
  $condition: ModelReferralConditionInput
) {
  deleteReferral(input: $input, condition: $condition) {
    id
    siteName
    siteLink
  }
}
`;
