import { Principal } from "@dfinity/principal";
import GOVERNANCE_CANISTER_ID from "./canisterId";
import {
  accountIdentifierFromBytes,
  arrayOfNumberToArrayBuffer,
  arrayOfNumberToUint8Array,
  principalToAccountIdentifier,
} from "../converter";
import { AccountIdentifier, E8s, NeuronId } from "../common/types";
