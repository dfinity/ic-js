// We only want to export the types and not the full service.
// So to update this file, first run 'didc bind -t js payloads.did > payloads.js', then copy the types out from the
// service factory function, and then export them all (use 'export const' rather than just 'const').

import { IDL } from "@dfinity/candid";

export const FirewallRule = IDL.Record({
  ipv4_prefixes: IDL.Vec(IDL.Text),
  action: IDL.Int32,
  comment: IDL.Text,
  ipv6_prefixes: IDL.Vec(IDL.Text),
  ports: IDL.Vec(IDL.Nat32),
});
export const AddFirewallRulesPayload = IDL.Record({
  expected_hash: IDL.Text,
  scope: IDL.Text,
  positions: IDL.Vec(IDL.Int32),
  rules: IDL.Vec(FirewallRule),
});
export const AddNodePayload = IDL.Record({
  prometheus_metrics_endpoint: IDL.Text,
  http_endpoint: IDL.Text,
  idkg_dealing_encryption_pk: IDL.Opt(IDL.Vec(IDL.Nat8)),
  xnet_endpoint: IDL.Text,
  committee_signing_pk: IDL.Vec(IDL.Nat8),
  node_signing_pk: IDL.Vec(IDL.Nat8),
  transport_tls_cert: IDL.Vec(IDL.Nat8),
  ni_dkg_dealing_encryption_pk: IDL.Vec(IDL.Nat8),
  p2p_flow_endpoints: IDL.Vec(IDL.Text),
});
export const Result = IDL.Variant({ Ok: IDL.Principal, Err: IDL.Text });
export const AddNodeOperatorPayload = IDL.Record({
  node_operator_principal_id: IDL.Opt(IDL.Principal),
  node_allowance: IDL.Nat64,
  rewardable_nodes: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat32)),
  node_provider_principal_id: IDL.Opt(IDL.Principal),
  dc_id: IDL.Text,
});
export const AddNodesToSubnetPayload = IDL.Record({
  subnet_id: IDL.Principal,
  node_ids: IDL.Vec(IDL.Principal),
});
export const Gps = IDL.Record({
  latitude: IDL.Float32,
  longitude: IDL.Float32,
});
export const DataCenterRecord = IDL.Record({
  id: IDL.Text,
  gps: IDL.Opt(Gps),
  region: IDL.Text,
  owner: IDL.Text,
});
export const AddOrRemoveDataCentersProposalPayload = IDL.Record({
  data_centers_to_add: IDL.Vec(DataCenterRecord),
  data_centers_to_remove: IDL.Vec(IDL.Text),
});
export const BlessReplicaVersionPayload = IDL.Record({
  node_manager_sha256_hex: IDL.Text,
  release_package_url: IDL.Text,
  sha256_hex: IDL.Text,
  replica_version_id: IDL.Text,
  release_package_sha256_hex: IDL.Text,
  node_manager_binary_url: IDL.Text,
  binary_url: IDL.Text,
});
export const BitcoinFeature = IDL.Variant({
  Paused: IDL.Null,
  Enabled: IDL.Null,
  Disabled: IDL.Null,
});
export const SubnetFeatures = IDL.Record({
  canister_sandboxing: IDL.Bool,
  http_requests: IDL.Bool,
  bitcoin_testnet_feature: IDL.Opt(BitcoinFeature),
  ecdsa_signatures: IDL.Bool,
});
export const EcdsaCurve = IDL.Variant({ secp256k1: IDL.Null });
export const EcdsaKeyId = IDL.Record({ name: IDL.Text, curve: EcdsaCurve });
export const EcdsaKeyRequest = IDL.Record({
  key_id: EcdsaKeyId,
  subnet_id: IDL.Opt(IDL.Principal),
});
export const EcdsaInitialConfig = IDL.Record({
  quadruples_to_create_in_advance: IDL.Nat32,
  keys: IDL.Vec(EcdsaKeyRequest),
});
export const SubnetType = IDL.Variant({
  application: IDL.Null,
  verified_application: IDL.Null,
  system: IDL.Null,
});
export const CreateSubnetPayload = IDL.Record({
  unit_delay_millis: IDL.Nat64,
  max_instructions_per_round: IDL.Nat64,
  features: SubnetFeatures,
  max_instructions_per_message: IDL.Nat64,
  gossip_registry_poll_period_ms: IDL.Nat32,
  max_ingress_bytes_per_message: IDL.Nat64,
  dkg_dealings_per_block: IDL.Nat64,
  max_block_payload_size: IDL.Nat64,
  max_instructions_per_install_code: IDL.Nat64,
  start_as_nns: IDL.Bool,
  is_halted: IDL.Bool,
  gossip_pfn_evaluation_period_ms: IDL.Nat32,
  max_ingress_messages_per_block: IDL.Nat64,
  max_number_of_canisters: IDL.Nat64,
  ecdsa_config: IDL.Opt(EcdsaInitialConfig),
  gossip_max_artifact_streams_per_peer: IDL.Nat32,
  advert_best_effort_percentage: IDL.Opt(IDL.Nat32),
  replica_version_id: IDL.Text,
  gossip_max_duplicity: IDL.Nat32,
  gossip_max_chunk_wait_ms: IDL.Nat32,
  dkg_interval_length: IDL.Nat64,
  subnet_id_override: IDL.Opt(IDL.Principal),
  ssh_backup_access: IDL.Vec(IDL.Text),
  ingress_bytes_per_block_soft_cap: IDL.Nat64,
  initial_notary_delay_millis: IDL.Nat64,
  gossip_max_chunk_size: IDL.Nat32,
  subnet_type: SubnetType,
  ssh_readonly_access: IDL.Vec(IDL.Text),
  gossip_retransmission_request_ms: IDL.Nat32,
  gossip_receive_check_cache_size: IDL.Nat32,
  node_ids: IDL.Vec(IDL.Principal),
});
export const DeleteSubnetPayload = IDL.Record({
  subnet_id: IDL.Opt(IDL.Principal),
});
export const NodeOperatorRecord = IDL.Record({
  node_operator_principal_id: IDL.Vec(IDL.Nat8),
  node_allowance: IDL.Nat64,
  rewardable_nodes: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat32)),
  node_provider_principal_id: IDL.Vec(IDL.Nat8),
  dc_id: IDL.Text,
});
export const Result_1 = IDL.Variant({
  Ok: IDL.Vec(IDL.Tuple(DataCenterRecord, NodeOperatorRecord)),
  Err: IDL.Text,
});
export const NodeProvidersMonthlyXdrRewards = IDL.Record({
  rewards: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat64)),
});
export const Result_2 = IDL.Variant({
  Ok: NodeProvidersMonthlyXdrRewards,
  Err: IDL.Text,
});
export const RecoverSubnetPayload = IDL.Record({
  height: IDL.Nat64,
  replacement_nodes: IDL.Opt(IDL.Vec(IDL.Principal)),
  subnet_id: IDL.Principal,
  registry_store_uri: IDL.Opt(IDL.Tuple(IDL.Text, IDL.Text, IDL.Nat64)),
  state_hash: IDL.Vec(IDL.Nat8),
  time_ns: IDL.Nat64,
});
export const RemoveFirewallRulesPayload = IDL.Record({
  expected_hash: IDL.Text,
  scope: IDL.Text,
  positions: IDL.Vec(IDL.Int32),
});
export const RemoveNodeDirectlyPayload = IDL.Record({ node_id: IDL.Principal });
export const RemoveNodeOperatorsPayload = IDL.Record({
  node_operators_to_remove: IDL.Vec(IDL.Vec(IDL.Nat8)),
});
export const RemoveNodesPayload = IDL.Record({
  node_ids: IDL.Vec(IDL.Principal),
});
export const RerouteCanisterRangePayload = IDL.Record({
  range_end_inclusive: IDL.Principal,
  range_start_inclusive: IDL.Principal,
  destination_subnet: IDL.Principal,
});
export const Result_3 = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
export const SetAuthorizedSubnetworkListArgs = IDL.Record({
  who: IDL.Opt(IDL.Principal),
  subnets: IDL.Vec(IDL.Principal),
});
export const SetFirewallConfigPayload = IDL.Record({
  ipv4_prefixes: IDL.Vec(IDL.Text),
  firewall_config: IDL.Text,
  ipv6_prefixes: IDL.Vec(IDL.Text),
});
export const CanisterAction = IDL.Variant({ Start: IDL.Null, Stop: IDL.Null });
export const StopOrStartNnsCanisterProposalPayload = IDL.Record({
  action: CanisterAction,
  canister_id: IDL.Principal,
});
export const UpdateIcpXdrConversionRatePayload = IDL.Record({
  data_source: IDL.Text,
  xdr_permyriad_per_icp: IDL.Nat64,
  timestamp_seconds: IDL.Nat64,
});
export const UpdateNodeDirectlyPayload = IDL.Record({
  idkg_dealing_encryption_pk: IDL.Opt(IDL.Vec(IDL.Nat8)),
});
export const UpdateNodeOperatorConfigPayload = IDL.Record({
  node_operator_id: IDL.Opt(IDL.Principal),
  node_provider_id: IDL.Opt(IDL.Principal),
  node_allowance: IDL.Opt(IDL.Nat64),
  rewardable_nodes: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat32)),
  dc_id: IDL.Opt(IDL.Text),
});
export const UpdateNodeOperatorConfigDirectlyPayload = IDL.Record({
  node_operator_id: IDL.Opt(IDL.Principal),
  node_provider_id: IDL.Opt(IDL.Principal),
});
export const NodeRewardRate = IDL.Record({
  xdr_permyriad_per_node_per_month: IDL.Nat64,
});
export const NodeRewardRates = IDL.Record({
  rates: IDL.Vec(IDL.Tuple(IDL.Text, NodeRewardRate)),
});
export const UpdateNodeRewardsTableProposalPayload = IDL.Record({
  new_entries: IDL.Vec(IDL.Tuple(IDL.Text, NodeRewardRates)),
});
export const EcdsaConfig = IDL.Record({
  quadruples_to_create_in_advance: IDL.Nat32,
  key_ids: IDL.Vec(EcdsaKeyId),
});
export const UpdateSubnetPayload = IDL.Record({
  unit_delay_millis: IDL.Opt(IDL.Nat64),
  max_duplicity: IDL.Opt(IDL.Nat32),
  max_instructions_per_round: IDL.Opt(IDL.Nat64),
  features: IDL.Opt(SubnetFeatures),
  set_gossip_config_to_default: IDL.Bool,
  max_instructions_per_message: IDL.Opt(IDL.Nat64),
  pfn_evaluation_period_ms: IDL.Opt(IDL.Nat32),
  subnet_id: IDL.Principal,
  max_ingress_bytes_per_message: IDL.Opt(IDL.Nat64),
  dkg_dealings_per_block: IDL.Opt(IDL.Nat64),
  max_block_payload_size: IDL.Opt(IDL.Nat64),
  max_instructions_per_install_code: IDL.Opt(IDL.Nat64),
  start_as_nns: IDL.Opt(IDL.Bool),
  is_halted: IDL.Opt(IDL.Bool),
  max_ingress_messages_per_block: IDL.Opt(IDL.Nat64),
  max_number_of_canisters: IDL.Opt(IDL.Nat64),
  ecdsa_config: IDL.Opt(EcdsaConfig),
  advert_best_effort_percentage: IDL.Opt(IDL.Nat32),
  retransmission_request_ms: IDL.Opt(IDL.Nat32),
  dkg_interval_length: IDL.Opt(IDL.Nat64),
  registry_poll_period_ms: IDL.Opt(IDL.Nat32),
  max_chunk_wait_ms: IDL.Opt(IDL.Nat32),
  receive_check_cache_size: IDL.Opt(IDL.Nat32),
  ecdsa_key_signing_enable: IDL.Opt(IDL.Vec(EcdsaKeyId)),
  ssh_backup_access: IDL.Opt(IDL.Vec(IDL.Text)),
  max_chunk_size: IDL.Opt(IDL.Nat32),
  initial_notary_delay_millis: IDL.Opt(IDL.Nat64),
  max_artifact_streams_per_peer: IDL.Opt(IDL.Nat32),
  subnet_type: IDL.Opt(SubnetType),
  ssh_readonly_access: IDL.Opt(IDL.Vec(IDL.Text)),
});
export const UpdateSubnetReplicaVersionPayload = IDL.Record({
  subnet_id: IDL.Principal,
  replica_version_id: IDL.Text,
});
export const UpdateUnassignedNodesConfigPayload = IDL.Record({
  replica_version: IDL.Opt(IDL.Text),
  ssh_readonly_access: IDL.Opt(IDL.Vec(IDL.Text)),
});
