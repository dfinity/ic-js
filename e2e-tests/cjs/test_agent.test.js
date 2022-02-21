/**
 * @jest-environment jsdom
 */

const { testConfig, testAgent } = require("./test_agent");
const { HttpAgent } = require("@dfinity/agent");

test("Should be able to create a testAgent", () => {
  jest.setTimeout(300000);
  return testAgent()
    .then((agent) => {
       expect(agent).toBeInstanceOf(HttpAgent);
     });
}, 5000000);
