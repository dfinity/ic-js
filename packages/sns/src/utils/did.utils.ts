export const toNullable = <T>(value?: T): [] | [T] => {
  return value ? [value] : [];
};
