export const idlFactory = ({ IDL }) => {
  const NeuronId = IDL.Record({ 'id' : IDL.Nat64 });
  const KnownNeuronData = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Opt(IDL.Text),
  });
  const KnownNeuron = IDL.Record({
    'id' : IDL.Opt(NeuronId),
    'known_neuron_data' : IDL.Opt(KnownNeuronData),
  });
  const ListKnownNeuronsResponse = IDL.Record({
    'known_neurons' : IDL.Vec(KnownNeuron),
  });
  return IDL.Service({
    'list_known_neurons' : IDL.Func([], [ListKnownNeuronsResponse], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
