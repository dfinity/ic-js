import { smallerVersion } from "./version.utils";

describe("smallerVersion", () => {
  it("returns true if current version is smaller than min version", () => {
    expect(
      smallerVersion({
        minVersion: "1.0",
        currentVersion: "0.0.9",
      }),
    ).toBeTruthy();
    expect(
      smallerVersion({
        minVersion: "2.0.0",
        currentVersion: "1.9.9",
      }),
    ).toBeTruthy();
    expect(
      smallerVersion({
        minVersion: "2.1.5",
        currentVersion: "2.1.4",
      }),
    ).toBeTruthy();
    expect(
      smallerVersion({
        minVersion: "2.1.5",
        currentVersion: "1.8.9",
      }),
    ).toBeTruthy();
    expect(
      smallerVersion({
        minVersion: "2",
        currentVersion: "1",
      }),
    ).toBeTruthy();
  });

  it("returns false if current version is bigger than min version", () => {
    expect(
      smallerVersion({
        minVersion: "0.0.9",
        currentVersion: "1.0",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.9.9",
        currentVersion: "2.0.0",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "2.1.4",
        currentVersion: "2.1.5",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.8.9",
        currentVersion: "2.1.5",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1",
        currentVersion: "2",
      }),
    ).toBeFalsy();
  });

  it("returns false if current version is same as min version", () => {
    expect(
      smallerVersion({
        minVersion: "1",
        currentVersion: "1.0",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "2",
        currentVersion: "2.0.0",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "2.1.4",
        currentVersion: "2.1.4",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "13.4.5",
        currentVersion: "13.4.5",
      }),
    ).toBeFalsy();
  });

  it("works with tagged versions", () => {
    expect(
      smallerVersion({
        minVersion: "1.0.0-alpha",
        currentVersion: "1.0.0",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1.0.0-alpha",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1.0.1-alpha",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.0.1",
        currentVersion: "1.0.1-beta.1",
      }),
    ).toBeFalsy();
    expect(
      smallerVersion({
        minVersion: "1.1.1-alpha.1",
        currentVersion: "1.0.1-beta.1",
      }),
    ).toBeTruthy();
    expect(
      smallerVersion({
        minVersion: "1.1.0",
        currentVersion: "1.0.1-beta.1",
      }),
    ).toBeTruthy();
  });
});
