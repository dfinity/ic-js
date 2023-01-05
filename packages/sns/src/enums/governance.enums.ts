// Source: https://github.com/dfinity/ic/blob/master/rs/sns/governance/proto/ic_sns_governance/pb/v1/governance.proto
export enum SnsNeuronPermissionType {
  NEURON_PERMISSION_TYPE_UNSPECIFIED = 0,

  // The principal has permission to configure the neuron's dissolve state. This includes
  // start dissolving, stop dissolving, and increasing the dissolve delay for the neuron.
  NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE = 1,

  // The principal has permission to add additional principals to modify the neuron.
  // The nervous system parameter `NervousSystemParameters::neuron_grantable_permissions`
  // determines the maximum set of privileges that a principal can grant to another principal in
  // the given SNS.
  NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS = 2,

  // The principal has permission to submit proposals on behalf of the neuron.
  // Submitting proposals can change a neuron's stake and thus this
  // is potentially a balance changing operation.
  NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL = 3,

  // The principal has permission to vote and follow other neurons on behalf of the neuron.
  NEURON_PERMISSION_TYPE_VOTE = 4,

  // The principal has permission to disburse the neuron.
  NEURON_PERMISSION_TYPE_DISBURSE = 5,

  // The principal has permission to split the neuron.
  NEURON_PERMISSION_TYPE_SPLIT = 6,

  // The principal has permission to merge the neuron's maturity into
  // the neuron's stake.
  /**
   * @deprecated
   */
  NEURON_PERMISSION_TYPE_MERGE_MATURITY = 7,

  // The principal has permission to disburse the neuron's maturity to a
  // given ledger account.
  NEURON_PERMISSION_TYPE_DISBURSE_MATURITY = 8,

  // The principal has permission to stake the neuron's maturity.
  NEURON_PERMISSION_TYPE_STAKE_MATURITY = 9,

  // The principal has permission to grant/revoke permission to vote and submit
  // proposals on behalf of the neuron to other principals.
  NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION = 10,
}
