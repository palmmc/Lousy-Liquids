import { BlockIdentifier } from "@serenityjs/core";
import { LiquidType } from "../Types/types";
import { FlowingLiquidType } from "../Types/Block/liquid";

const LiquidBlockMap: {
  [key in LiquidType | FlowingLiquidType]: BlockIdentifier;
} = {
  [BlockIdentifier.Water]: BlockIdentifier.Water,
  [BlockIdentifier.FlowingWater]: BlockIdentifier.Water,
  [BlockIdentifier.Lava]: BlockIdentifier.Lava,
  [BlockIdentifier.FlowingLava]: BlockIdentifier.Lava,
};

const FlowingBlockMap: {
  [key in LiquidType]: FlowingLiquidType;
} = {
  [BlockIdentifier.Water]: BlockIdentifier.FlowingWater,
  [BlockIdentifier.Lava]: BlockIdentifier.FlowingLava,
};

const SourceBlockMap: {
  [key in FlowingLiquidType]: LiquidType;
} = {
  [BlockIdentifier.FlowingWater]: BlockIdentifier.Water,
  [BlockIdentifier.FlowingLava]: BlockIdentifier.Lava,
};

// Time in ticks for one block of liquid to flow.
const FlowSpeed: {
  [key in LiquidType | FlowingLiquidType]: number;
} = {
  [BlockIdentifier.Water]: 5,
  [BlockIdentifier.FlowingWater]: 5,
  [BlockIdentifier.Lava]: 30,
  [BlockIdentifier.FlowingLava]: 30,
};

export { LiquidBlockMap, FlowingBlockMap, SourceBlockMap, FlowSpeed };
