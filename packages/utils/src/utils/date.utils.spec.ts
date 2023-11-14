import { secondsToDuration } from "./date.utils";

describe("secondsToDuration", () => {
  // This function should not be smart. It should just make it easier to add
  // numbers together to get the number of seconds we want to test.
  const renderSeconds = ({
    nonLeapYears = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  }: {
    nonLeapYears?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }) => {
    days += 365 * nonLeapYears;
    hours += 24 * days;
    minutes += 60 * hours;
    seconds += 60 * minutes;
    return secondsToDuration(BigInt(seconds));
  };

  it("should give year details", () => {
    expect(renderSeconds({ nonLeapYears: 1 })).toBe("1 year");
    expect(renderSeconds({ nonLeapYears: 1, seconds: 59 })).toBe("1 year");
    expect(renderSeconds({ nonLeapYears: 1, minutes: 59 })).toBe(
      "1 year, 59 minutes",
    );
    expect(renderSeconds({ nonLeapYears: 1, hours: 23 })).toBe(
      "1 year, 23 hours",
    );
    expect(renderSeconds({ nonLeapYears: 1, days: 1, seconds: -1 })).toBe(
      "1 year, 23 hours",
    );
    expect(renderSeconds({ nonLeapYears: 1, days: 1 })).toBe("1 year, 1 day");
    expect(renderSeconds({ nonLeapYears: 1, days: 2 })).toBe("1 year, 2 days");
    expect(renderSeconds({ nonLeapYears: 2, seconds: -1 })).toBe(
      "1 year, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 2 })).toBe("2 years");
    expect(renderSeconds({ nonLeapYears: 2, minutes: 59 })).toBe(
      "2 years, 59 minutes",
    );
    expect(renderSeconds({ nonLeapYears: 2, hours: 23 })).toBe(
      "2 years, 23 hours",
    );
    expect(renderSeconds({ nonLeapYears: 2, days: 1 })).toBe("2 years, 1 day");
    expect(renderSeconds({ nonLeapYears: 2, days: 2 })).toBe("2 years, 2 days");
    expect(renderSeconds({ nonLeapYears: 3, seconds: -1 })).toBe(
      "2 years, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 3 })).toBe("3 years");
    // 4 actual years have a leap day so we add 1 day to 4 nonLeap years.
    expect(renderSeconds({ nonLeapYears: 4, days: 1, seconds: -1 })).toBe(
      "3 years, 365 days",
    );
    expect(renderSeconds({ nonLeapYears: 4, days: 1 })).toBe("4 years");
    expect(renderSeconds({ nonLeapYears: 5, days: 1, seconds: -1 })).toBe(
      "4 years, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 5, days: 1 })).toBe("5 years");
    expect(renderSeconds({ nonLeapYears: 6, days: 1, seconds: -1 })).toBe(
      "5 years, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 6, days: 1 })).toBe("6 years");
    expect(renderSeconds({ nonLeapYears: 7, days: 1, seconds: -1 })).toBe(
      "6 years, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 7, days: 1 })).toBe("7 years");
    // 4 actual years have 2 leap days so we add 2 days to 8 nonLeap years.
    expect(renderSeconds({ nonLeapYears: 8, days: 2, seconds: -1 })).toBe(
      "7 years, 365 days",
    );
    expect(renderSeconds({ nonLeapYears: 8, days: 2 })).toBe("8 years");
    expect(renderSeconds({ nonLeapYears: 9, days: 2, seconds: -1 })).toBe(
      "8 years, 364 days",
    );
    expect(renderSeconds({ nonLeapYears: 9, days: 2 })).toBe("9 years");
  });

  it("should give day details", () => {
    expect(renderSeconds({ days: 1 })).toBe("1 day");
    expect(renderSeconds({ days: 1, seconds: 59 })).toBe("1 day");
    expect(renderSeconds({ days: 1, minutes: 59 })).toBe("1 day, 59 minutes");
    expect(renderSeconds({ days: 1, hours: 1 })).toBe("1 day, 1 hour");
    expect(renderSeconds({ days: 1, hours: 2 })).toBe("1 day, 2 hours");
    expect(renderSeconds({ days: 2, seconds: -1 })).toBe("1 day, 23 hours");
    expect(renderSeconds({ days: 2 })).toBe("2 days");
    expect(renderSeconds({ days: 365, seconds: -1 })).toBe(
      "364 days, 23 hours",
    );
  });

  it("should give hour details", () => {
    expect(renderSeconds({ hours: 1 })).toBe("1 hour");
    expect(renderSeconds({ hours: 1, seconds: 59 })).toBe("1 hour");
    expect(renderSeconds({ hours: 1, minutes: 59 })).toBe("1 hour, 59 minutes");
    expect(renderSeconds({ hours: 2, seconds: -1 })).toBe("1 hour, 59 minutes");
    expect(renderSeconds({ hours: 2 })).toBe("2 hours");
    expect(renderSeconds({ hours: 2, minutes: 59 })).toBe(
      "2 hours, 59 minutes",
    );
    expect(renderSeconds({ hours: 24, seconds: -1 })).toBe(
      "23 hours, 59 minutes",
    );
  });

  it("should give minute details", () => {
    expect(renderSeconds({ minutes: 1 })).toBe("1 minute");
    expect(renderSeconds({ minutes: 1, seconds: 1 })).toBe("1 minute");
    expect(renderSeconds({ minutes: 1, seconds: 59 })).toBe("1 minute");
    expect(renderSeconds({ minutes: 2 })).toBe("2 minutes");
    expect(renderSeconds({ minutes: 2, seconds: 59 })).toBe("2 minutes");
    expect(renderSeconds({ minutes: 60, seconds: -1 })).toBe("59 minutes");
  });

  it("should give seconds details", () => {
    expect(secondsToDuration(BigInt(2))).toBe("2 seconds");
    expect(secondsToDuration(BigInt(59))).toBe("59 seconds");
  });

  it("should give a second details", () => {
    expect(secondsToDuration(BigInt(1))).toBe("1 second");
  });
});
