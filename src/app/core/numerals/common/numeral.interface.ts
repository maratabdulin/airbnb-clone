export enum NumeralType {
  Guest = "guest",
  Bedroom = "bedroom",
  Bathroom = "bathroom",
  Bed = "bed",
  Currency = "currency",
  Night = "night",
}

export const NUMERAL_TYPES_FORMS: Record<NumeralType, [string, string]> = {
  [NumeralType.Guest]: ["guest", "guests"],
  [NumeralType.Bedroom]: ["bedroom", "bedrooms"],
  [NumeralType.Bathroom]: ["bathroom", "bathrooms"],
  [NumeralType.Bed]: ["bed", "beds"],
  [NumeralType.Currency]: ["euro", "euros"],
  [NumeralType.Night]: ["night", "nights"],
};
