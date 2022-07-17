// There is also toNullable in sns-js project - in case we would like to create a utility package for both libs

export const fromNullable = <T>(value: [] | [T]): T | undefined => {
  return value?.[0];
};
