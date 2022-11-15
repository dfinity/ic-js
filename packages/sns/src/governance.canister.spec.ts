import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  ManageNeuron,
  NeuronId,
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
import { SnsDisburseNeuronParams } from "./types/governance.params";

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
        subaccount: arrayOfNumberToUint8Array([1, 2, 3]),
        command: [
          {
            AddNeuronPermissions: {
              permissions_to_add: [
                { permissions: Int32Array.from(permissions) },
              ],
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

    it("should raise an error", async () => {
      const principal = Principal.fromText("aaaaa-aa");
      const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
      const request: ManageNeuron = {
        subaccount: arrayOfNumberToUint8Array([1, 2, 3]),
        command: [
          {
            AddNeuronPermissions: {
              permissions_to_add: [
                { permissions: Int32Array.from(permissions) },
              ],
              principal_id: [principal],
            },
          },
        ],
      };
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () => canister.manageNeuron(request);
      expect(call).rejects.toThrowError(SnsGovernanceError);
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

  describe("disburse", () => {
    const params: SnsDisburseNeuronParams = {
      neuronId: {
        id: arrayOfNumberToUint8Array([1, 2, 3]),
      },
      amount: BigInt(321),
    };

    it("should disburse the neuron", async () => {
      const request: ManageNeuron = {
        subaccount: params.neuronId.id,
        command: [
          {
            Disburse: {
              to_account: [],
              amount: [
                {
                  e8s: params.amount as bigint,
                },
              ],
            },
          },
        ],
      };

      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Disburse: { transfer_block_height: BigInt(0) } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      await canister.disburse(params);

      expect(service.manage_neuron).toBeCalled();
      expect(service.manage_neuron).toBeCalledWith(request);
    });

    it("should raise an error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () => canister.disburse(params);

      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("startDissolving", () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    it("should call manageNeuron", async () => {
      const request: ManageNeuron = {
        subaccount: neuronId.id,
        command: [
          {
            Configure: {
              operation: [{ StartDissolving: {} }],
            },
          },
        ],
      };

      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Configure: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      await canister.startDissolving(neuronId);

      expect(service.manage_neuron).toBeCalled();
      expect(service.manage_neuron).toBeCalledWith(request);
    });

    it("should raise an error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () => canister.startDissolving(neuronId);

      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("stopDissolving", () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    it("should call manageNeuron", async () => {
      const request: ManageNeuron = {
        subaccount: neuronId.id,
        command: [
          {
            Configure: {
              operation: [{ StopDissolving: {} }],
            },
          },
        ],
      };

      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Configure: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      await canister.stopDissolving(neuronId);

      expect(service.manage_neuron).toBeCalled();
      expect(service.manage_neuron).toBeCalledWith(request);
    });

    it("should raise an error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () => canister.stopDissolving(neuronId);

      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("setDissolveTimestamp", () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    it("should call manageNeuron", async () => {
      const request: ManageNeuron = {
        subaccount: neuronId.id,
        command: [
          {
            Configure: {
              operation: [
                {
                  SetDissolveTimestamp: {
                    dissolve_timestamp_seconds: BigInt(123),
                  },
                },
              ],
            },
          },
        ],
      };

      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Configure: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      await canister.setDissolveTimestamp({
        neuronId,
        dissolveTimestampSeconds: BigInt(123),
      });

      expect(service.manage_neuron).toBeCalled();
      expect(service.manage_neuron).toBeCalledWith(request);
    });

    it("should raise an error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.setDissolveTimestamp({
          neuronId,
          dissolveTimestampSeconds: BigInt(123),
        });

      await expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("increaseDissolveDelay", () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    it("should call manageNeuron", async () => {
      const request: ManageNeuron = {
        subaccount: neuronId.id,
        command: [
          {
            Configure: {
              operation: [
                {
                  IncreaseDissolveDelay: {
                    additional_dissolve_delay_seconds: 123,
                  },
                },
              ],
            },
          },
        ],
      };

      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Configure: {} }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      await canister.increaseDissolveDelay({
        neuronId,
        additionalDissolveDelaySeconds: 123,
      });

      expect(service.manage_neuron).toBeCalled();
      expect(service.manage_neuron).toBeCalledWith(request);
    });

    it("should raise an error", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.increaseDissolveDelay({
          neuronId,
          additionalDissolveDelaySeconds: 123,
        });

      await expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("queryNeuron", () => {
    it("should return the neuron", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.get_neuron.mockResolvedValue({
        result: [{ Neuron: neuronMock }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.queryNeuron({
        neuronId: neuronIdMock,
        certified: true,
      });
      expect(res).toEqual(neuronMock);
    });

    it("should return undefined if neuron not found", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.get_neuron.mockResolvedValue({
        result: [
          {
            Error: {
              error_message: "No neuron for given NeuronId.",
              error_type: 2,
            },
          },
        ],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.queryNeuron({
        neuronId: neuronIdMock,
        certified: true,
      });
      expect(res).toBeUndefined();
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
        canister.queryNeuron({
          neuronId: neuronIdMock,
          certified: true,
        });
      expect(call).rejects.toThrowError(SnsGovernanceError);
    });
  });

  describe("refershNeuron", () => {
    it("should manage the neuron", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      const neuronId = { id: new Uint8Array() };
      service.manage_neuron.mockResolvedValue({
        command: [{ ClaimOrRefresh: { refreshed_neuron_id: [neuronId] } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      await canister.refreshNeuron(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("should raise error", async () => {
      const neuronId = { id: new Uint8Array() };
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () => canister.refreshNeuron(neuronId);
      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });

  describe("claimNeuron", () => {
    it("should manage the neuron and return new neuron id", async () => {
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      const neuronId = { id: new Uint8Array() };
      service.manage_neuron.mockResolvedValue({
        command: [{ ClaimOrRefresh: { refreshed_neuron_id: [neuronId] } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.claimNeuron({
        memo: BigInt(1),
        controller: Principal.fromText("aaaaa-aa"),
        subaccount: new Uint8Array(),
      });
      expect(res).toEqual(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("should raise error", async () => {
      const neuronId = { id: new Uint8Array() };
      const service = mock<ActorSubclass<SnsGovernanceService>>();
      service.manage_neuron.mockResolvedValue({
        command: [{ Error: { error_message: "test", error_type: 2 } }],
      });

      const canister = SnsGovernanceCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.claimNeuron({
          memo: BigInt(1),
          controller: Principal.fromText("aaaaa-aa"),
          subaccount: new Uint8Array(),
        });
      expect(call).rejects.toThrowError(SnsGovernanceError);
      expect(service.manage_neuron).toBeCalled();
    });
  });
});
