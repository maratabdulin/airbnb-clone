export function numeralToWord(
  count: number,
  declensionForms: [string, string],
): string {
  if (count === 1) {
    return declensionForms[0];
  }
  return declensionForms[1];
}
