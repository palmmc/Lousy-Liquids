/* Imports */
import "./BlockTraits/imports";

import { WorldEvent } from "@serenityjs/core";
import { Plugin, PluginEvents, PluginType } from "@serenityjs/plugins";
import { SourceLiquidBlockTrait } from "./BlockTraits/sourceLiquid";
import { FlowingLiquidBlockTrait } from "./BlockTraits/flowingLiquid";
import { LiquidInteractionBlockTrait } from "./BlockTraits/liquidInteraction";

const version = "0.1.0";

export class LiquidPlugin extends Plugin implements PluginEvents {
  public readonly type = PluginType.Addon;

  public constructor() {
    super("lousy-liquids", version);
  }

  public onInitialize(): void {
    this.logger.info("Initializing block traits...");
    this.serenity.on(WorldEvent.WorldInitialize, ({ world }) => {
      world.blockPalette.registerTrait(LiquidInteractionBlockTrait);
      world.blockPalette.registerTrait(SourceLiquidBlockTrait);
      world.blockPalette.registerTrait(FlowingLiquidBlockTrait);
      this.logger.info("Block traits registered successfully.");
    });
  }

  public onStartUp(): void {
    this.logger.info("Loaded Lousy Liquids v" + version);
  }
}

export default new LiquidPlugin();
