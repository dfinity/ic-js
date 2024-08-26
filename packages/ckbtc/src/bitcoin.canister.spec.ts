import { ActorSubclass } from "@dfinity/agent";
import { bitcoinAddressMock } from "@dfinity/ic-management/src/ic-management.mock";
import { CanisterOptions } from "@dfinity/utils/src";
import { mock } from "jest-mock-extended";
import type {
  _SERVICE as BitcoinService,
  get_utxos_response,
} from "../candid/bitcoin";
import { BitcoinCanister } from "./bitcoin.canister";
import { bitcoinCanisterIdMock } from "./mocks/minter.mock";
import { GetUtxosParams } from "./types/bitcoin.params";

describe("BitcoinCanister", () => {
  const createBitcoinCanister = (
    services: Pick<
      CanisterOptions<BitcoinService>,
      "serviceOverride" | "certifiedServiceOverride"
    >,
  ): BitcoinCanister =>
    BitcoinCanister.create({
      canisterId: bitcoinCanisterIdMock,
      ...services,
    });

  describe("bitcoinGetUtxos", () => {
    const params: Omit<GetUtxosParams, "certified"> = {
      network: "testnet",
      filter: { minConfirmations: 2 },
      address: bitcoinAddressMock,
    };

    const response: get_utxos_response = {
      next_page: [],
      tip_height: 123,
      tip_block_hash: new Uint8Array([1, 2, 3]),
      utxos: [
        {
          height: 456,
          value: 789n,
          outpoint: {
            txid: new Uint8Array([4, 5, 6]),
            vout: 1,
          },
        },
        {
          height: 789,
          value: 7n,
          outpoint: {
            txid: new Uint8Array([7, 8, 9]),
            vout: 2,
          },
        },
      ],
    };

    describe("certified", () => {
      it("returns get utxos result when success", async () => {
        const certifiedService = mock<ActorSubclass<BitcoinService>>();
        certifiedService.bitcoin_get_utxos.mockResolvedValue(response);

        const service = mock<ActorSubclass<BitcoinService>>();

        const { getUtxos } = await createBitcoinCanister({
          certifiedServiceOverride: certifiedService,
          serviceOverride: service,
        });

        const res = await getUtxos({
          ...params,
          certified: true,
        });

        expect(res).toEqual(response);
        expect(certifiedService.bitcoin_get_utxos).toHaveBeenCalledWith({
          network: { testnet: null },
          filter: [{ min_confirmations: 2 }],
          address: bitcoinAddressMock,
        });
        expect(service.bitcoin_get_utxos_query).not.toHaveBeenCalled();
      });

      it("call get utxos with min_confirmations", async () => {
        const certifiedService = mock<ActorSubclass<BitcoinService>>();
        certifiedService.bitcoin_get_utxos.mockResolvedValue(response);

        const { getUtxos } = await createBitcoinCanister({
          certifiedServiceOverride: certifiedService,
        });

        await getUtxos({
          ...params,
          certified: true,
        });

        expect(certifiedService.bitcoin_get_utxos).toHaveBeenCalledWith({
          network: { testnet: null },
          filter: [{ min_confirmations: 2 }],
          address: bitcoinAddressMock,
        });
      });

      it("call get utxos with page", async () => {
        const certifiedService = mock<ActorSubclass<BitcoinService>>();
        certifiedService.bitcoin_get_utxos.mockResolvedValue(response);

        const { getUtxos } = await createBitcoinCanister({
          certifiedServiceOverride: certifiedService,
        });

        const { filter, ...rest } = params;
        const page = [1, 2, 3];
        const pageParams: Omit<GetUtxosParams, "certified"> = {
          ...rest,
          filter: {
            page,
          },
        };

        await getUtxos({
          ...pageParams,
          certified: true,
        });

        expect(certifiedService.bitcoin_get_utxos).toHaveBeenCalledWith({
          network: { testnet: null },
          filter: [{ page }],
          address: bitcoinAddressMock,
        });
      });

      it("throws Error", async () => {
        const error = new Error("Test");
        const certifiedService = mock<ActorSubclass<BitcoinService>>();
        certifiedService.bitcoin_get_utxos.mockRejectedValue(error);

        const { getUtxos } = await createBitcoinCanister({
          certifiedServiceOverride: certifiedService,
        });

        const call = () =>
          getUtxos({
            ...params,
            certified: true,
          });

        expect(call).rejects.toThrowError(Error);
      });
    });

    describe("Not certified", () => {
      it("returns get utxos query result when success", async () => {
        const service = mock<ActorSubclass<BitcoinService>>();
        service.bitcoin_get_utxos_query.mockResolvedValue(response);

        const certifiedService = mock<ActorSubclass<BitcoinService>>();

        const { getUtxos } = await createBitcoinCanister({
          certifiedServiceOverride: certifiedService,
          serviceOverride: service,
        });

        const res = await getUtxos({
          ...params,
          certified: false,
        });

        expect(res).toEqual(response);
        expect(service.bitcoin_get_utxos_query).toHaveBeenCalledWith({
          network: { testnet: null },
          filter: [{ min_confirmations: 2 }],
          address: bitcoinAddressMock,
        });
        expect(certifiedService.bitcoin_get_utxos).not.toHaveBeenCalled();
      });

      it("throws Error", async () => {
        const error = new Error("Test");
        const service = mock<ActorSubclass<BitcoinService>>();
        service.bitcoin_get_utxos_query.mockRejectedValue(error);

        const { getUtxos } = await createBitcoinCanister({
          serviceOverride: service,
        });

        const call = () =>
          getUtxos({
            ...params,
            certified: false,
          });

        expect(call).rejects.toThrowError(Error);
      });
    });
  });
});
