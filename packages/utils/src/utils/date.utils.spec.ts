import { describe } from "@jest/globals";
import type { I18nSecondsToDuration } from "./date.utils";
import { nowInBigIntNanoSeconds, secondsToDuration } from "./date.utils";

describe("date.utils", () => {
  const EN_TIME = {
    year: "year",
    year_plural: "years",
    month: "month",
    month_plural: "months",
    day: "day",
    day_plural: "days",
    hour: "hour",
    hour_plural: "hours",
    minute: "minute",
    minute_plural: "minutes",
    second: "second",
    second_plural: "seconds",
  };

  const FR_TIME = {
    year: "an",
    year_plural: "ans",
    month: "mois",
    month_plural: "mois",
    day: "jour",
    day_plural: "jours",
    hour: "heure",
    hour_plural: "heures",
    minute: "minute",
    minute_plural: "minutes",
    second: "seconde",
    second_plural: "secondes",
  };

  const test = (
    i18nResult: I18nSecondsToDuration,
    i18n?: I18nSecondsToDuration,
  ) => {
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
      return secondsToDuration({ seconds: BigInt(seconds), i18n });
    };

    it("should give year details", () => {
      expect(renderSeconds({ nonLeapYears: 1 })).toBe(`1 ${i18nResult.year}`);
      expect(renderSeconds({ nonLeapYears: 1, seconds: 59 })).toBe(
        `1 ${i18nResult.year}`,
      );
      expect(renderSeconds({ nonLeapYears: 1, minutes: 59 })).toBe(
        `1 ${i18nResult.year}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 1, hours: 23 })).toBe(
        `1 ${i18nResult.year}, 23 ${i18nResult.hour_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 1, days: 1, seconds: -1 })).toBe(
        `1 ${i18nResult.year}, 23 ${i18nResult.hour_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 1, days: 1 })).toBe(
        `1 ${i18nResult.year}, 1 ${i18nResult.day}`,
      );
      expect(renderSeconds({ nonLeapYears: 1, days: 2 })).toBe(
        `1 ${i18nResult.year}, 2 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 2, seconds: -1 })).toBe(
        `1 ${i18nResult.year}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 2 })).toBe(
        `2 ${i18nResult.year_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 2, minutes: 59 })).toBe(
        `2 ${i18nResult.year_plural}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 2, hours: 23 })).toBe(
        `2 ${i18nResult.year_plural}, 23 ${i18nResult.hour_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 2, days: 1 })).toBe(
        `2 ${i18nResult.year_plural}, 1 ${i18nResult.day}`,
      );
      expect(renderSeconds({ nonLeapYears: 2, days: 2 })).toBe(
        `2 ${i18nResult.year_plural}, 2 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 3, seconds: -1 })).toBe(
        `2 ${i18nResult.year_plural}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 3 })).toBe(
        `3 ${i18nResult.year_plural}`,
      );
      // 4 actual years have a leap day so we add 1 day to 4 nonLeap years.
      expect(renderSeconds({ nonLeapYears: 4, days: 1, seconds: -1 })).toBe(
        `3 ${i18nResult.year_plural}, 365 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 4, days: 1 })).toBe(
        `4 ${i18nResult.year_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 5, days: 1, seconds: -1 })).toBe(
        `4 ${i18nResult.year_plural}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 5, days: 1 })).toBe(
        `5 ${i18nResult.year_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 6, days: 1, seconds: -1 })).toBe(
        `5 ${i18nResult.year_plural}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 6, days: 1 })).toBe(
        `6 ${i18nResult.year_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 7, days: 1, seconds: -1 })).toBe(
        `6 ${i18nResult.year_plural}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 7, days: 1 })).toBe(
        `7 ${i18nResult.year_plural}`,
      );
      // 4 actual years have 2 leap days so we add 2 days to 8 nonLeap years.
      expect(renderSeconds({ nonLeapYears: 8, days: 2, seconds: -1 })).toBe(
        `7 ${i18nResult.year_plural}, 365 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 8, days: 2 })).toBe(
        `8 ${i18nResult.year_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 9, days: 2, seconds: -1 })).toBe(
        `8 ${i18nResult.year_plural}, 364 ${i18nResult.day_plural}`,
      );
      expect(renderSeconds({ nonLeapYears: 9, days: 2 })).toBe(
        `9 ${i18nResult.year_plural}`,
      );
    });

    it("should give day details", () => {
      expect(renderSeconds({ days: 1 })).toBe(`1 ${i18nResult.day}`);
      expect(renderSeconds({ days: 1, seconds: 59 })).toBe(
        `1 ${i18nResult.day}`,
      );
      expect(renderSeconds({ days: 1, minutes: 59 })).toBe(
        `1 ${i18nResult.day}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ days: 1, hours: 1 })).toBe(
        `1 ${i18nResult.day}, 1 ${i18nResult.hour}`,
      );
      expect(renderSeconds({ days: 1, hours: 2 })).toBe(
        `1 ${i18nResult.day}, 2 ${i18nResult.hour_plural}`,
      );
      expect(renderSeconds({ days: 2, seconds: -1 })).toBe(
        `1 ${i18nResult.day}, 23 ${i18nResult.hour_plural}`,
      );
      expect(renderSeconds({ days: 2 })).toBe(`2 ${i18nResult.day_plural}`);
      expect(renderSeconds({ days: 365, seconds: -1 })).toBe(
        `364 ${i18nResult.day_plural}, 23 ${i18nResult.hour_plural}`,
      );
    });

    it("should give hour details", () => {
      expect(renderSeconds({ hours: 1 })).toBe(`1 ${i18nResult.hour}`);
      expect(renderSeconds({ hours: 1, seconds: 59 })).toBe(
        `1 ${i18nResult.hour}`,
      );
      expect(renderSeconds({ hours: 1, minutes: 59 })).toBe(
        `1 ${i18nResult.hour}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ hours: 2, seconds: -1 })).toBe(
        `1 ${i18nResult.hour}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ hours: 2 })).toBe(`2 ${i18nResult.hour_plural}`);
      expect(renderSeconds({ hours: 2, minutes: 59 })).toBe(
        `2 ${i18nResult.hour_plural}, 59 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ hours: 24, seconds: -1 })).toBe(
        `23 ${i18nResult.hour_plural}, 59 ${i18nResult.minute_plural}`,
      );
    });

    it("should give minute details", () => {
      expect(renderSeconds({ minutes: 1 })).toBe(`1 ${i18nResult.minute}`);
      expect(renderSeconds({ minutes: 1, seconds: 1 })).toBe(
        `1 ${i18nResult.minute}`,
      );
      expect(renderSeconds({ minutes: 1, seconds: 59 })).toBe(
        `1 ${i18nResult.minute}`,
      );
      expect(renderSeconds({ minutes: 2 })).toBe(
        `2 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ minutes: 2, seconds: 59 })).toBe(
        `2 ${i18nResult.minute_plural}`,
      );
      expect(renderSeconds({ minutes: 60, seconds: -1 })).toBe(
        `59 ${i18nResult.minute_plural}`,
      );
    });

    it("should give seconds details", () => {
      expect(secondsToDuration({ seconds: BigInt(2), i18n })).toBe(
        `2 ${i18nResult.second_plural}`,
      );
      expect(secondsToDuration({ seconds: BigInt(59), i18n })).toBe(
        `59 ${i18nResult.second_plural}`,
      );
    });

    it("should give a second details", () => {
      expect(secondsToDuration({ seconds: BigInt(1), i18n })).toBe(
        `1 ${i18nResult.second}`,
      );
    });
  };

  describe("secondsToDuration default lang", () => test(EN_TIME, undefined));
  describe.each([EN_TIME, FR_TIME])("secondsToDuration %p", (time) =>
    test(time, time),
  );

  describe("nowInBigIntNanoSeconds", () => {
    it("should return the current timestamp in nanoseconds as a bigint", () => {
      const mockDateNow = 1698416400000;
      jest.spyOn(Date, "now").mockReturnValue(mockDateNow);

      const expectedNanoSeconds = BigInt(mockDateNow) * BigInt(1e6);

      const result = nowInBigIntNanoSeconds();

      expect(result).toBe(expectedNanoSeconds);
    });
  });
});
