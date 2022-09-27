import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import { NeuronId } from "../candid/sns_governance";
import { SnsNeuronPermissionType } from "./enums/governance.enums";
import { SnsGovernanceCanister } from "./governance.canister";
import { SnsLedgerCanister } from "./ledger.canister";
import { metadataMock, neuronsMock } from "./mocks/governance.mock";
import { tokeMetadataResponseMock } from "./mocks/ledger.mock";
import { SnsRootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SnsSwapCanister } from "./swap.canister";
import type { SnsDisburseNeuronParams } from "./types/governance.params";

describe("SnsWrapper", () => {
  const mockGovernanceCanister = mock<SnsGovernanceCanister>();
  mockGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  mockGovernanceCanister.metadata.mockResolvedValue(metadataMock);

  const mockCertifiedGovernanceCanister = mock<SnsGovernanceCanister>();
  mockCertifiedGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  mockCertifiedGovernanceCanister.metadata.mockResolvedValue(metadataMock);

  const mockSwapCanister = mock<SnsSwapCanister>();
  mockSwapCanister.state.mockResolvedValue({
    swap: [],
    derived: [],
  });

  const mockCertifiedSwapCanister = mock<SnsSwapCanister>();
  mockCertifiedSwapCanister.state.mockResolvedValue({
    swap: [],
    derived: [],
  });
  const mockLedgerCanister = mock<SnsLedgerCanister>();
  mockLedgerCanister.metadata.mockResolvedValue(tokeMetadataResponseMock);

  const mockCertifiedLedgerCanister = mock<SnsLedgerCanister>();
  mockCertifiedLedgerCanister.metadata.mockResolvedValue(
    tokeMetadataResponseMock
  );

  const snsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: mockLedgerCanister,
    governance: mockGovernanceCanister,
    swap: mockSwapCanister,
    certified: false,
  });

  const certifiedSnsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: mockCertifiedLedgerCanister,
    governance: mockCertifiedGovernanceCanister,
    swap: mockCertifiedSwapCanister,
    certified: true,
  });

  afterEach(() => jest.clearAllMocks());

  it("should call list of neurons with query or update", async () => {
    await snsWrapper.listNeurons({});
    expect(mockGovernanceCanister.listNeurons).toHaveBeenCalledWith({
      certified: false,
    });
    await certifiedSnsWrapper.listNeurons({});
    expect(mockCertifiedGovernanceCanister.listNeurons).toHaveBeenCalledWith({
      certified: true,
    });
  });

  it("should call get neuron with query or update", async () => {
    const neuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };
    await snsWrapper.getNeuron({ neuronId });
    expect(mockGovernanceCanister.getNeuron).toHaveBeenCalledWith({
      neuronId,
      certified: false,
    });
    await certifiedSnsWrapper.getNeuron({ neuronId });
    expect(mockCertifiedGovernanceCanister.getNeuron).toHaveBeenCalledWith({
      neuronId,
      certified: true,
    });
  });

  it("should call addNeuronPermissions with query or update", async () => {
    const neuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };
    const principal = Principal.fromText("aaaaa-aa");
    const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
    await snsWrapper.addNeuronPermissions({ permissions, neuronId, principal });
    expect(mockGovernanceCanister.addNeuronPermissions).toHaveBeenCalledWith({
      neuronId,
      permissions,
      principal,
    });
  });

  it("should call removeNeuronPermissions with query or update", async () => {
    const neuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };
    const principal = Principal.fromText("aaaaa-aa");
    const permissions = [SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE];
    await snsWrapper.removeNeuronPermissions({
      permissions,
      neuronId,
      principal,
    });
    expect(mockGovernanceCanister.removeNeuronPermissions).toHaveBeenCalledWith(
      {
        neuronId,
        permissions,
        principal,
      }
    );
  });

  it("should collect metadata with query or update", async () => {
    await snsWrapper.metadata({});
    await certifiedSnsWrapper.metadata({});

    expect(mockGovernanceCanister.metadata).toHaveBeenCalledWith({
      certified: false,
    });
    expect(mockCertifiedGovernanceCanister.metadata).toHaveBeenCalledWith({
      certified: true,
    });

    expect(mockLedgerCanister.metadata).toHaveBeenCalledWith({
      certified: false,
    });
    expect(mockCertifiedLedgerCanister.metadata).toHaveBeenCalledWith({
      certified: true,
    });
  });

  it("should call leger balance with query or update", async () => {
    const owner = Principal.fromText("aaaaa-aa");
    await snsWrapper.balance({
      owner,
    });
    await certifiedSnsWrapper.balance({
      owner,
    });

    expect(mockLedgerCanister.balance).toHaveBeenCalledWith({
      certified: false,
      owner,
    });
    expect(mockCertifiedLedgerCanister.balance).toHaveBeenCalledWith({
      certified: true,
      owner,
    });
  });

  it("should call leger balance of subaccount with query or update", async () => {
    const owner = Principal.fromText("aaaaa-aa");
    const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
    await snsWrapper.balance({
      owner,
      subaccount,
    });
    await certifiedSnsWrapper.balance({
      owner,
      subaccount,
    });

    expect(mockLedgerCanister.balance).toHaveBeenCalledWith({
      certified: false,
      owner,
      subaccount,
    });
    expect(mockCertifiedLedgerCanister.balance).toHaveBeenCalledWith({
      certified: true,
      owner,
      subaccount,
    });
  });

  it("should call leger metadata with query or update", async () => {
    await snsWrapper.ledgerMetadata({});
    await certifiedSnsWrapper.ledgerMetadata({});

    expect(mockLedgerCanister.metadata).toHaveBeenCalledWith({
      certified: false,
    });
    expect(mockCertifiedLedgerCanister.metadata).toHaveBeenCalledWith({
      certified: true,
    });
  });

  it("should call swapState with query and update", async () => {
    await snsWrapper.swapState({});
    expect(mockSwapCanister.state).toHaveBeenCalledWith({ certified: false });
    await certifiedSnsWrapper.swapState({});
    expect(mockCertifiedSwapCanister.state).toHaveBeenCalledWith({
      certified: true,
    });
  });

  it("should call notifyParticipation", async () => {
    await snsWrapper.notifyParticipation({ buyer: "aaaaa-aa" });
    expect(mockSwapCanister.notifyParticipation).toHaveBeenCalledWith({
      buyer: "aaaaa-aa",
    });
  });

  it("should call getUserCommitment with query and update", async () => {
    await snsWrapper.getUserCommitment({
      principal_id: [Principal.fromText("aaaaa-aa")],
    });
    expect(mockSwapCanister.getUserCommitment).toBeCalled();
    expect(mockCertifiedSwapCanister.getUserCommitment).not.toBeCalled();
    await certifiedSnsWrapper.getUserCommitment({
      principal_id: [Principal.fromText("aaaaa-aa")],
    });
    expect(mockCertifiedSwapCanister.getUserCommitment).toBeCalled();
  });

  it("should call disburse", async () => {
    const params: SnsDisburseNeuronParams = {
      neuronId: {
        id: arrayOfNumberToUint8Array([1, 2, 3]),
      },
      amount: BigInt(321),
    };

    await snsWrapper.disburse(params);

    expect(mockGovernanceCanister.disburse).toHaveBeenCalledWith(params);
  });

  it("should call startDissolving", async () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    await snsWrapper.startDissolving(neuronId);

    expect(mockGovernanceCanister.startDissolving).toHaveBeenCalledWith(
      neuronId
    );
  });

  it("should call stopDissolving", async () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    await snsWrapper.stopDissolving(neuronId);

    expect(mockGovernanceCanister.stopDissolving).toHaveBeenCalledWith(
      neuronId
    );
  });
});
