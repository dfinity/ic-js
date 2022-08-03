import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import { SnsGovernanceCanister } from "./governance.canister";
import { SnsLedgerCanister } from "./ledger.canister";
import { neuronsMock } from "./mocks/governance.mock";
import { SnsRootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SnsSwapCanister } from "./swap.canister";

describe("SnsWrapper", () => {
  const mockGovernanceCanister = mock<SnsGovernanceCanister>();
  mockGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  mockGovernanceCanister.metadata.mockResolvedValue("");

  const mockCertifiedGovernanceCanister = mock<SnsGovernanceCanister>();
  mockCertifiedGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  mockCertifiedGovernanceCanister.metadata.mockResolvedValue("");

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

  const snsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: {} as SnsLedgerCanister,
    governance: mockGovernanceCanister,
    swap: mockSwapCanister,
    certified: false,
  });

  const certifiedSnsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: {} as SnsLedgerCanister,
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
      id: [1, 2, 3],
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

  it("should call metadata with query or update", async () => {
    await snsWrapper.metadata({});
    expect(mockGovernanceCanister.metadata).toHaveBeenCalledWith({
      certified: false,
    });
    await certifiedSnsWrapper.metadata({});
    expect(mockCertifiedGovernanceCanister.metadata).toHaveBeenCalledWith({
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
});
