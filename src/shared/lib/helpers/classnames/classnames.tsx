type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additionsl?: string[]
): string => {
  return [
    cls,
    ...additionsl.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
