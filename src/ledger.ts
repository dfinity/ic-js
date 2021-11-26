import { Agent, AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { AccountBalanceRequest, ICPTs } from "../proto/ledger_pb";
import { AccountIdentifier } from "./account_identifier";
import { ICP } from "./icp";
import { submitQueryRequest, submitUpdateRequest } from "./utils/proto";

const MAINNET_LEDGER_CANISTER_ID = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");

export class Ledger {
    private readonly agent: Agent;
    private readonly canisterId: Principal;

    private constructor(agent: Agent, canisterId: Principal) {
        this.agent = agent;
        this.canisterId = canisterId;
    }

    public static create(agent = defaultAgent(), canisterId = MAINNET_LEDGER_CANISTER_ID) {
        return new Ledger(agent, canisterId);
    }

    public getBalance = async (
        accountIdentifier: AccountIdentifier,
        certified = true
    ): Promise<ICP> => {
        const request = new AccountBalanceRequest();
        request.setAccount(accountIdentifier.toProto());

        const callMethod = certified ? submitUpdateRequest : submitQueryRequest;

        const responseBytes = await callMethod(
            this.agent,
            this.canisterId,
            "account_balance_pb",
            request.serializeBinary()
        );

        return ICP.fromE8s(BigInt(ICPTs.deserializeBinary(new Uint8Array(responseBytes)).getE8s()));
    };
}

/**
 * @returns The default agent to use. An agent that connects to mainnet with the anonymous identity.
 */
function defaultAgent(): Agent {
    return new HttpAgent({
        host: "https://ic0.app",
        identity: new AnonymousIdentity(),
    });
}
