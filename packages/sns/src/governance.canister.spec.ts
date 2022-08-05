import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  ManageNeuron,
  _SERVICE as SnsGovernanceService,
} from "../candid/sns_governance";
import { MAX_LIST_NEURONS_RESULTS } from "./constants/governance.constants";
import { SnsNeuronPermissionType } from "./enums/governance.enums";
import { SnsGovernanceError } from "./errors/governance.errors";
import { SnsGovernanceCanister } from "./governance.canister";
import {
  metadataMock,
  neuronIdMock,
  neuronMock,
  neuronsMock,
} from "./mocks/governance.mock";
import { rootCanisterIdMock } from "./mocks/sns.mock";

describe("Governance canister", () => {
  it("should return the list of neurons of the sns", async () => {
    const service = mock<ActorSubclass<SnsGovernanceService>>();
    service.list_neurons.mockResolvedValue({ neurons: neuronsMock });

    const canister = SnsGovernanceCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.listNeurons({});
    expect(res).toEqual(neuronsMock);
  });

  it("should call list of neurons with default param", async () => {
    const service = mock<ActorSubclass<SnsGovernanceService>>();
    const mockListNeurons = service.list_neurons.mockResolvedValue({
      neurons: neuronsMock,
    });

    const canister = SnsGovernanceCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    await canister.listNeurons({});
    expect(mockListNeurons).toHaveBeenCalledWith({
      limit: MAX_LIST_NEURONS_RESULTS,
      of_principal: [],
      start_page_at: [],
    });
  });

  describe("getNeuron", () => {
    it("should return the neuron", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.get_neuron.mockResolvedValue({
        result: [{ Neuron: neuronMock }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.getNeuron({
        neuronId: neuronIdMock,
        certified: true,
      });
      expect(res).toEqual(neuronMock);
    });

    it("should raise error on governance error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.get_neuron.mockResolvedValue({
        result: [{ Error: { error_message: "error", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.getNeuron({
          neuronId: neuronIdMock,
          certified: true,
        });
      expect(call).rejects.toThrowError(SnsGovernanceError);
    });
  });

  describe("addNeuronPermissions", () => {
    it("should manage the neuron", async () => {
      const neuronId = {
        id: [1, 2, 3],
      };
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ AddNeuronPermission: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      await canister.addNeuronPermissions({
        neuronId: neuronIdMock,
        permissions,
        principal,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("should raise error", async () => {
      const neuronId = {
        id: [1, 2, 3],
      };
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.addNeuronPermissions({
          neuronId: neuronIdMock,
          permissions,
          principal,
        });
      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("removeNeuronPermissions", () => {
    it("should manage the neuron", async () => {
      const neuronId = {
        id: [1, 2, 3],
      };
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ AddNeuronPermission: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      await canister.removeNeuronPermissions({
        neuronId: neuronIdMock,
        permissions,
        principal,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("should raise error", async () => {
      const neuronId = {
        id: [1, 2, 3],
      };
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.removeNeuronPermissions({
          neuronId: neuronIdMock,
          permissions,
          principal,
        });
      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("manageNeuron", () => {
    it("should manage the neuron", async () => {
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const request: ManageNeuron = {
        subaccount: [1, 2, 3],
        command: [
          {
            AddNeuronPermissions: {
              permissions_to_add: [{ permissions }],
              principal_id: [principal],
            },
          },
        ],
      };
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ AddNeuronPermission: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      await canister.manageNeuron(request);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("metadata", () => {
    it("should return the metadata of the sns", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.get_metadata.mockResolvedValue(metadataMock);

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.metadata({});
      expect(res).toEqual(metadataMock);
    });
  });
});
