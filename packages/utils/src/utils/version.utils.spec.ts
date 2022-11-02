import { smallerVersion } from "./version.utils";

describe("smallerVersion", () => {
  it("returns true if current version is smaller than min version", () => {
    expect(
      smallerVersion({
        minVersion: "1.0",
        currentVersion: "0.0.9",
      })
    ).toBe(true);
    expect(
      smallerVersion({
        minVersion: "2.0.0",
        currentVersion: "1.9.9",
      })
    ).toBe(true);
    expect(
      smallerVersion({
        minVersion: "2.1.5",
        currentVersion: "2.1.4",
      })
    ).toBe(true);
    expect(
      smallerVersion({
        minVersion: "2.1.5",
        currentVersion: "1.8.9",
      })
    ).toBe(true);
    expect(
      smallerVersion({
        minVersion: "2",
        currentVersion: "1",
      })
    ).toBe(true);
  });
  it("returns false if current version is bigger than min version", () => {
    expect(
      smallerVersion({
        minVersion: "0.0.9",
        currentVersion: "1.0",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.9.9",
        currentVersion: "2.0.0",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "2.1.4",
        currentVersion: "2.1.5",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.8.9",
        currentVersion: "2.1.5",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1",
        currentVersion: "2",
      })
    ).toBe(false);
  });
  it("returns false if current version is same as min version", () => {
    expect(
      smallerVersion({
        minVersion: "1",
        currentVersion: "1.0",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "2",
        currentVersion: "2.0.0",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "2.1.4",
        currentVersion: "2.1.4",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "13.4.5",
        currentVersion: "13.4.5",
      })
    ).toBe(false);
  });

  it.only("works with tagged versions", () => {
    expect(
      smallerVersion({
        minVersion: "1.0.0-alpha",
        currentVersion: "1.0.0",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1.0.0-alpha",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.0.0",
        currentVersion: "1.0.1-alpha",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.0.1",
        currentVersion: "1.0.1-beta.1",
      })
    ).toBe(false);
    expect(
      smallerVersion({
        minVersion: "1.1.1-alpha.1",
        currentVersion: "1.0.1-beta.1",
      })
    ).toBe(true);
    expect(
      smallerVersion({
        minVersion: "1.1.0",
        currentVersion: "1.0.1-beta.1",
      })
    ).toBe(true);
  });
});
