import { browser } from "$app/environment";
import { metadata } from "./data/globalMetadata";
import { regionCodeToFile } from "./data/mappings";
import type { Card, MetadataType } from "./types";

export const cardsCache = new Map<string, Card[]>();

export const getCardFromCode = async (code: string): Promise<Card | undefined> => {
  const set = code.slice(0, 2);
  const cards = await getCardsFromSet(set);
  return cards?.find((card) => card.cardCode === code);
}

export const getCardsFromSet = async (region: string): Promise<Card[] | undefined> => {
  if (cardsCache.get(region) && browser) return cardsCache.get(region);
  const { default: cards } = await import(/* @vite-ignore */`./data/${regionCodeToFile[region]}.ts`);
  if (browser) cardsCache.set(region, cards);
  return cards;
}

export const getDescriptionFromRef = (ref: string, type: MetadataType): string | undefined => {
  const data = metadata[type] as { description?: string, nameRef: string }[];
  return data.find((data) => data.nameRef === ref)?.description;
}

export const getNameFromRef = (ref: string, type: MetadataType): string | undefined => {
  const data = metadata[type] as { name: string, nameRef: string }[];
  return data.find((data) => data.nameRef === ref)?.name;
}