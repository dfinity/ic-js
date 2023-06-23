import { isNullish, nonNullish } from "@dfinity/utils";

/**
 * A naive implementation of a payment parser. Given a code, the function attempts to extract a token name, account identifier (textual representation), and an optional amount.
 *
 * If the code doesn't match the expected pattern, `undefined` is returned for simplicity.
 * Similarly, if an optional amount is provided but it's not a valid number, the parser will not throw an exception and returns `undefined`.
 *
 * Please note that this function doesn't perform any validity checks on the extracted information.
 * It does not verify if the token is known or if the identifier is a valid address.
 *
 * urn            = token ":" address [ "?" params]
 * token         = [ ckbtc / icp / chat / bitcoin / ethereum ... ]
 * address       = STRING
 * params        = param [ "&" params ]
 * param         = [ amountparam ]
 * amountparam   = "amount=" *digit [ "." *digit ]
 *
 * @param code string
 * @returns { token: string; identifier: string; amount?: number } | undefined
 */
export const decodePayment = (
  code: string
): { token: string; identifier: string; amount?: number } | undefined => {
  const regex =
    /^([a-zA-Z0-9%_.~+-]+):([a-zA-Z0-9%_.~+-]+\/?([a-zA-Z0-9%_.~+/-]+)?)\??((?:[a-zA-Z0-9%_.~+-]+=[a-zA-Z0-9%_.~+-]+(?:[&;])?)*)$/;

  const match = code.match(regex);

  if (isNullish(match)) {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_code_, token, identifier, _undefined_, parameters] = match;

  const decodeAmount = (): string | undefined => {
    const regex = /([a-zA-Z0-9%_.~+-]+)=([a-zA-Z0-9%_.~+-]+)([&;])?/g;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const match = [...(parameters ?? "").matchAll(regex)].find(
      ([_param_, key]) => /amount|value/.test(key)
    );

    if (isNullish(match)) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_param_, _key_, value] = match;

    return value;
  };

  const amount = decodeAmount();

  return {
    token,
    identifier,
    ...(nonNullish(amount) &&
      !isNaN(parseFloat(amount)) && { amount: parseFloat(amount) }),
  };
};
