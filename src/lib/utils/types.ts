import type { metadata } from "./data/globalMetadata";

export type Region = typeof metadata.regions[number]['nameRef']
export type Keyword = typeof metadata.keywords[number]['nameRef']
export type SpellSpeed = typeof metadata.spellSpeeds[number]['nameRef']
export type Rarity = typeof metadata.rarities[number]['nameRef']
export type MetadataType = keyof typeof metadata;

export interface Card {
  associatedCards: string[],
  associatedCardRefs: string[],
  assets: { gameAbsolutePath: string, fullAbsolutePath: string }[],
  regions: string[],
  regionRefs: Region[],
  attack: number,
  cost: number,
  health: number,
  description: string,
  descriptionRaw: string,
  levelupDescription: string,
  levelupDescriptionRaw: string,
  flavorText: string,
  artistName: string,
  name: string,
  cardCode: string,
  keywords: string[],
  keywordRefs: Keyword[],
  spellSpeed: string,
  spellSpeedRef: SpellSpeed,
  rarity: string,
  rarityRef: Rarity,
  subtypes: string[],
  supertype: string,
  type: string,
  collectible: boolean
  set: string
}

