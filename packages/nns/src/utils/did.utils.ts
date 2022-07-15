export const fromNullable = <T>(value: [] | [T]): T | undefined => {
  return value?.[0];
};
