import { BlockIdentifier } from "@serenityjs/core";
import { WeightedItem } from "../Types/types";

const OreGeneratorDistribution: WeightedItem<BlockIdentifier>[] = [
  { value: BlockIdentifier.Cobblestone, weight: 30 },
  { value: BlockIdentifier.Netherrack, weight: 20 },
  { value: BlockIdentifier.CoalOre, weight: 15 },
  { value: BlockIdentifier.IronOre, weight: 10 },
  { value: BlockIdentifier.LapisOre, weight: 8 },
  { value: BlockIdentifier.GoldOre, weight: 10 },
  { value: BlockIdentifier.DiamondOre, weight: 4 },
  { value: BlockIdentifier.EmeraldOre, weight: 3 },
];

export { OreGeneratorDistribution };
