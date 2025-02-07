export const categories = [
  {
    id: 1,
    name: "Kooliriided",
  },
  {
    id: 2,
    name: "Beebiriided",
  },
  {
    id: 3,
    name: "Tudrukud",
  },
];

export const products = [
  {
    id: 1,
    name: "Продукт 1",
    imageUrl: "url-to-image",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Продукт 2",
    imageUrl: "url-to-image",
    categoryId: 2,
  },
];

export const SEASONS = {
  KEVAD: "kevad",
  SUVI: "suvi",
  SUGIS: "sügis",
  TALV: "talv",
} as const;

export const seasonLabels: Record<keyof typeof SEASONS, string> = {
  KEVAD: "Kevad",
  SUVI: "Suvi",
  SUGIS: "Sügis",
  TALV: "Talv",
};

// Тип для сезонов
export type SeasonType = (typeof SEASONS)[keyof typeof SEASONS];
