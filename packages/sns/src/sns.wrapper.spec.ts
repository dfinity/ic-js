import { mock } from "jest-mock-extended";
import { GovernanceCanister } from "./governance.canister";
import { LedgerCanister } from "./ledger.canister";
import { neuronsMock } from "./mocks/governance.mock";
import { RootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SwapCanister } from "./swap.canister";

describe("SnsWrapper", () => {
  const mockGovernanceCanister = mock<GovernanceCanister>();
  const mockListNeurons =
    mockGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  const mockMetadata = mockGovernanceCanister.metadata.mockResolvedValue("");

  const mockCertifiedGovernanceCanister = mock<GovernanceCanister>();
  const mockCertifiedListNeurons =
    mockCertifiedGovernanceCanister.listNeurons.mockResolvedValue(neuronsMock);
  const mockCertifiedMetadata =
    mockCertifiedGovernanceCanister.metadata.mockResolvedValue("");

  const mockSwapCanister = mock<SwapCanister>();
  const mockSwapState = mockSwapCanister.state.mockResolvedValue({
    swap: [],
    derived: [],
  });

  const mockCertifiedSwapCanister = mock<SwapCanister>();
  const mockCertifiedSwapState =
    mockCertifiedSwapCanister.state.mockResolvedValue({
      swap: [],
      derived: [],
    });

  const snsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as RootCanister,
    ledger: {} as LedgerCanister,
    governance: mockGovernanceCanister,
    swap: mockSwapCanister,
    certified: false,
  });

  const certifiedSnsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as RootCanister,
    ledger: {} as LedgerCanister,
    governance: mockCertifiedGovernanceCanister,
    swap: mockCertifiedSwapCanister,
    certified: true,
  });

  it("should call list of neurons with query or update", async () => {
    await snsWrapper.listNeurons({});
    expect(mockListNeurons).toHaveBeenCalledWith({ certified: false });
    await certifiedSnsWrapper.listNeurons({});
    expect(mockCertifiedListNeurons).toHaveBeenCalledWith({ certified: true });
  });

  it("should call metadata with query or update", async () => {
    await snsWrapper.metadata({});
    expect(mockListNeurons).toHaveBeenCalledWith({ certified: false });
    await certifiedSnsWrapper.metadata({});
    expect(mockCertifiedListNeurons).toHaveBeenCalledWith({ certified: true });
  });
});
