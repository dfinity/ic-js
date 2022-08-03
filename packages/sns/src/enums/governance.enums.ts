// Source: https://github.com/dfinity/ic/blob/1998263b426df0a22f0d0706695c0826f0ab4d7d/rs/sns/governance/proto/ic_sns_governance/pb/v1/governance.proto#L10
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
  NEURON_PERMISSION_TYPE_MERGE_MATURITY = 7,

  // The principal has permission to disburse the neuron's maturity to a
  // given ledger account.
  NEURON_PERMISSION_TYPE_DISBURSE_MATURITY = 8,
}
