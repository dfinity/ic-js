import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import { NeuronId } from "../candid/sns_governance";
import { SnsNeuronPermissionType } from "./enums/governance.enums";
import { SnsGovernanceError } from "./errors/governance.errors";
import { SnsGovernanceCanister } from "./governance.canister";
import { SnsLedgerCanister } from "./ledger.canister";
import {
  metadataMock,
  neuronIdMock,
  neuronMock,
  neuronsMock,
} from "./mocks/governance.mock";
import { mockPrincipal, tokeMetadataResponseMock } from "./mocks/ledger.mock";
import { SnsRootCanister } from "./root.canister";
import { SnsIndexCanister } from "./sns-index.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SnsSwapCanister } from "./swap.canister";
import type { SnsDisburseNeuronParams } from "./types/governance.params";
import { TransferParams } from "./types/ledger.params";

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

  const mockIndexCanister = mock<SnsIndexCanister>();
  mockIndexCanister.getTransactions.mockResolvedValue({
    transactions: [],
    oldest_tx_id: [BigInt(2)],
  });

  const snsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: mockLedgerCanister,
    governance: mockGovernanceCanister,
    swap: mockSwapCanister,
    index: mockIndexCanister,
    certified: false,
  });

  const certifiedSnsWrapper: SnsWrapper = new SnsWrapper({
    root: {} as SnsRootCanister,
    ledger: mockCertifiedLedgerCanister,
    governance: mockCertifiedGovernanceCanister,
    swap: mockCertifiedSwapCanister,
    index: mockIndexCanister,
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

  it("should call list of nervous system functions with query or update", async () => {
    await snsWrapper.listNervousSystemFunctions({});
    expect(
      mockGovernanceCanister.listNervousSystemFunctions
    ).toHaveBeenCalledWith({
      certified: false,
    });
    await certifiedSnsWrapper.listNervousSystemFunctions({});
    expect(
      mockCertifiedGovernanceCanister.listNervousSystemFunctions
    ).toHaveBeenCalledWith({
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

  it("should call leger transaction fee with query or update", async () => {
    await snsWrapper.transactionFee({});
    await certifiedSnsWrapper.transactionFee({});

    expect(mockLedgerCanister.transactionFee).toHaveBeenCalled();
    expect(mockCertifiedLedgerCanister.transactionFee).toHaveBeenCalled();
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

  it("should call leger transfer", async () => {
    const transferParams: TransferParams = {
      to: {
        owner: Principal.fromText("aaaaa-aa"),
        subaccount: [],
      },
      amount: BigInt(100_000_000),
    };
    await certifiedSnsWrapper.transfer(transferParams);

    expect(mockCertifiedLedgerCanister.transfer).toHaveBeenCalledWith(
      transferParams
    );
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

  it("should call setDissolveTimestamp", async () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    await snsWrapper.setDissolveTimestamp({
      neuronId,
      dissolveTimestampSeconds: BigInt(123),
    });

    expect(mockGovernanceCanister.setDissolveTimestamp).toHaveBeenCalledWith({
      neuronId,
      dissolveTimestampSeconds: BigInt(123),
    });
  });

  it("should call increaseDissolveDelay", async () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };

    await snsWrapper.increaseDissolveDelay({
      neuronId,
      additionalDissolveDelaySeconds: 123,
    });

    expect(mockGovernanceCanister.increaseDissolveDelay).toHaveBeenCalledWith({
      neuronId,
      additionalDissolveDelaySeconds: 123,
    });
  });

  it("should call setTopicFollowees", async () => {
    const neuronId: NeuronId = {
      id: arrayOfNumberToUint8Array([1, 2, 3]),
    };
    const functionId = BigInt(222);
    const followees = [
      { id: arrayOfNumberToUint8Array([1, 2, 3, 4]) },
      { id: arrayOfNumberToUint8Array([1, 2, 3, 5]) },
    ];

    await snsWrapper.setTopicFollowees({
      neuronId,
      functionId,
      followees,
    });

    expect(mockGovernanceCanister.setTopicFollowees).toHaveBeenCalledWith({
      neuronId,
      functionId,
      followees,
    });
  });

  it("should call getTransactions in index canister", async () => {
    const owner = Principal.fromText("aaaaa-aa");
    const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
    const account = {
      owner,
      subaccount,
    };
    const params = {
      account,
      start: BigInt(10),
      max_results: BigInt(100),
    };

    await snsWrapper.getTransactions(params);

    expect(mockIndexCanister.getTransactions).toHaveBeenCalledWith(params);
  });

  it("should call queryNeuron", async () => {
    const params = {
      neuronId: { id: new Uint8Array() },
    };

    await snsWrapper.queryNeuron(params);

    expect(mockGovernanceCanister.queryNeuron).toHaveBeenCalledWith({
      ...params,
      certified: false,
    });
  });

  it("should call refreshNeuron", async () => {
    const neuronId = { id: new Uint8Array() };

    await certifiedSnsWrapper.refreshNeuron(neuronId);

    expect(mockCertifiedGovernanceCanister.refreshNeuron).toHaveBeenCalledWith(
      neuronId
    );
  });

  it("should call claimNeuron", async () => {
    const params = {
      subaccount: new Uint8Array(),
      memo: BigInt(2),
      controller: Principal.fromText("aaaaa-aa"),
    };

    await certifiedSnsWrapper.claimNeuron(params);

    expect(mockCertifiedGovernanceCanister.claimNeuron).toHaveBeenCalledWith(
      params
    );
  });

  it("should get neuron balance", async () => {
    const neuronId = { id: new Uint8Array() };

    await certifiedSnsWrapper.getNeuronBalance(neuronId);

    expect(mockCertifiedLedgerCanister.balance).toHaveBeenCalledWith({
      owner: certifiedSnsWrapper.canisterIds.governanceCanisterId,
      subaccount: neuronId.id,
      certified: true,
    });
  });

  describe("stakeNeuron", () => {
    const mockSnsAccount = {
      owner: mockPrincipal,
    };
    afterEach(() => jest.clearAllMocks());
    describe("when transfer and claim work", () => {
      mockCertifiedGovernanceCanister.manageNeuron.mockResolvedValue({
        command: [
          {
            ClaimOrRefresh: {
              refreshed_neuron_id: [neuronIdMock],
            },
          },
        ],
      });
      mockCertifiedLedgerCanister.transfer.mockResolvedValue(BigInt(10));

      afterEach(() => jest.clearAllMocks());
      it("should check balances with query call until one with 0 is found", async () => {
        mockCertifiedGovernanceCanister.queryNeuron
          .mockResolvedValueOnce(neuronMock)
          .mockResolvedValueOnce(neuronMock)
          .mockResolvedValue(undefined);
        await certifiedSnsWrapper.stakeNeuron({
          stakeE8s: BigInt(10),
          source: mockSnsAccount,
          controller: mockPrincipal,
        });

        expect(
          mockCertifiedGovernanceCanister.queryNeuron
        ).toHaveBeenCalledTimes(4);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[0][0].certified
        ).toBe(false);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[1][0].certified
        ).toBe(false);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[2][0].certified
        ).toBe(false);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[3][0].certified
        ).toBe(true);
      });

      it("should check with update when 0 si found and continue if that is not 0", async () => {
        mockCertifiedGovernanceCanister.queryNeuron
          .mockResolvedValueOnce(neuronMock)
          .mockResolvedValueOnce(neuronMock)
          .mockResolvedValueOnce(undefined)
          .mockResolvedValueOnce(neuronMock)
          .mockResolvedValueOnce(undefined)
          .mockResolvedValue(undefined);

        await certifiedSnsWrapper.stakeNeuron({
          stakeE8s: BigInt(10),
          source: mockSnsAccount,
          controller: mockPrincipal,
        });

        expect(
          mockCertifiedGovernanceCanister.queryNeuron
        ).toHaveBeenCalledTimes(6);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[2][0].certified
        ).toBe(false);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[3][0].certified
        ).toBe(true);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[4][0].certified
        ).toBe(false);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron.mock.calls[5][0].certified
        ).toBe(true);
      });
      it("should make a transfer and claim the neuron", async () => {
        mockCertifiedGovernanceCanister.queryNeuron.mockResolvedValue(
          undefined
        );

        await certifiedSnsWrapper.stakeNeuron({
          stakeE8s: BigInt(10),
          source: mockSnsAccount,
          controller: mockPrincipal,
        });

        expect(
          mockCertifiedGovernanceCanister.queryNeuron
        ).toHaveBeenCalledTimes(2);
        expect(mockCertifiedLedgerCanister.transfer).toHaveBeenCalled();
        expect(mockCertifiedGovernanceCanister.claimNeuron).toHaveBeenCalled();
      });
    });

    describe("when it fails", () => {
      it("should not claim the neuron if the transfer fails", async () => {
        mockCertifiedGovernanceCanister.queryNeuron.mockResolvedValue(
          undefined
        );
        mockCertifiedLedgerCanister.transfer.mockRejectedValue(
          new Error("error")
        );

        const call = () =>
          certifiedSnsWrapper.stakeNeuron({
            stakeE8s: BigInt(10),
            source: mockSnsAccount,
            controller: mockPrincipal,
          });

        await expect(call).rejects.toThrowError("error");
        expect(
          mockCertifiedGovernanceCanister.queryNeuron
        ).toHaveBeenCalledTimes(2);
        expect(mockCertifiedLedgerCanister.transfer).toHaveBeenCalled();
        expect(
          mockCertifiedGovernanceCanister.claimNeuron
        ).not.toHaveBeenCalled();
      });

      it("should fail if claim fails", async () => {
        mockCertifiedGovernanceCanister.queryNeuron.mockResolvedValue(
          undefined
        );
        mockCertifiedLedgerCanister.transfer.mockResolvedValue(BigInt(10));

        mockCertifiedGovernanceCanister.claimNeuron.mockRejectedValue(
          new SnsGovernanceError("error")
        );

        const call = () =>
          certifiedSnsWrapper.stakeNeuron({
            stakeE8s: BigInt(10),
            source: mockSnsAccount,
            controller: mockPrincipal,
          });

        await expect(call).rejects.toThrow(SnsGovernanceError);
        expect(
          mockCertifiedGovernanceCanister.queryNeuron
        ).toHaveBeenCalledTimes(2);
        expect(mockCertifiedLedgerCanister.transfer).toHaveBeenCalled();
        expect(mockCertifiedGovernanceCanister.claimNeuron).toHaveBeenCalled();
      });
    });
  });

  describe("nextNeuronAccount", () => {
    it("should return the next account with balance 0 and the index", async () => {
      mockCertifiedGovernanceCanister.queryNeuron
        .mockResolvedValueOnce(neuronMock)
        .mockResolvedValueOnce(neuronMock)
        .mockResolvedValue(undefined);

      const { account, index } = await certifiedSnsWrapper.nextNeuronAccount(
        mockPrincipal
      );

      expect(mockCertifiedGovernanceCanister.queryNeuron).toHaveBeenCalledTimes(
        4
      );
      expect(account.owner).toEqual(
        certifiedSnsWrapper.canisterIds.governanceCanisterId
      );
      expect(index).toEqual(BigInt(2));
    });

    it("should raise error if max is reached", async () => {
      mockCertifiedGovernanceCanister.queryNeuron.mockResolvedValue(neuronMock);

      const call = () => certifiedSnsWrapper.nextNeuronAccount(mockPrincipal);

      await expect(call).rejects.toThrowError(
        "No more neuron accounts available"
      );
    });
  });
});
