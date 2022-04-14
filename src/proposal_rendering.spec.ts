import { addNodeToSubnetPayload } from "./test/dummy-proposals.utils.js";

/**
 * Tests that the payload JSON is as expected.
 */
const jsonTest = (
  payload: Uint8Array,
  json: string,
) => {
    const parsed = payload; // TODO
    const asJson= JSON.stringify(parsed);
    expect(asJson).toBe(json);
};


describe("Proposals.toJSON is pretty readable", () => {
  // TODO:  Apply this to all sample payloads.
  //Object.values(payloads).forEach((path) => {
  // it(redirectTestTitle(path, hash), async () => {
  //      await redirectTest(browser, path, hash);
  //    });
  // });
  it("paddy", async () => {
        jsonTest(addNodeToSubnetPayload, "")
  });
});
