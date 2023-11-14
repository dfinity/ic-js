const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_NON_LEAP_YEAR = 365;

export interface I18nSecondsToDuration {
  year: string;
  year_plural: string;
  month: string;
  month_plural: string;
  day: string;
  day_plural: string;
  hour: string;
  hour_plural: string;
  minute: string;
  minute_plural: string;
  second: string;
  second_plural: string;
}

const EN_TIME: I18nSecondsToDuration = {
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

/**
 * Convert seconds to a human-readable duration, such as "6 days, 10 hours."
 * @param {Object} options - The options object.
 * @param {bigint} options.seconds - The number of seconds to convert.
 * @param {I18nSecondsToDuration} [options.i18n] - The i18n object for customizing language and units. Defaults to English.
 * @returns {string} The human-readable duration string.
 */
export const secondsToDuration = ({
  seconds,
  i18n = EN_TIME,
}: {
  seconds: bigint;
  i18n?: I18nSecondsToDuration;
}): string => {
  let minutes = seconds / BigInt(SECONDS_IN_MINUTE);

  let hours = minutes / BigInt(MINUTES_IN_HOUR);
  minutes -= hours * BigInt(MINUTES_IN_HOUR);

  let days = hours / BigInt(HOURS_IN_DAY);
  hours -= days * BigInt(HOURS_IN_DAY);

  const years = fullYearsInDays(days);
  days -= daysInYears(years);

  const periods = [
    createLabel("year", years),
    createLabel("day", days),
    createLabel("hour", hours),
    createLabel("minute", minutes),
    ...(seconds > BigInt(0) && seconds < BigInt(60)
      ? [createLabel("second", seconds)]
      : []),
  ];

  return periods
    .filter(({ amount }) => amount > 0)
    .slice(0, 2)
    .map(
      (labelInfo) =>
        `${labelInfo.amount} ${
          labelInfo.amount === 1
            ? i18n[labelInfo.labelKey]
            : i18n[`${labelInfo.labelKey}_plural`]
        }`,
    )
    .join(", ");
};

const fullYearsInDays = (days: bigint): bigint => {
  // Use integer division.
  let years = days / BigInt(DAYS_IN_NON_LEAP_YEAR);
  while (daysInYears(years) > days) {
    years--;
  }
  return years;
};

const daysInYears = (years: bigint): bigint => {
  // Use integer division.
  const leapDays = years / BigInt(4);
  return years * BigInt(DAYS_IN_NON_LEAP_YEAR) + leapDays;
};

type LabelKey = "year" | "month" | "day" | "hour" | "minute" | "second";
type LabelInfo = {
  labelKey: LabelKey;
  amount: number;
};
const createLabel = (labelKey: LabelKey, amount: bigint): LabelInfo => ({
  labelKey,
  amount: Number(amount),
});
