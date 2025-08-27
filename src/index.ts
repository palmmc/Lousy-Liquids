/* Imports */
import "./BlockTraits/imports";

import { WorldEvent } from "@serenityjs/core";
import { Plugin, PluginEvents, PluginType } from "@serenityjs/plugins";
import { SourceLiquidBlockTrait } from "./BlockTraits/sourceLiquid";
import { FlowingLiquidBlockTrait } from "./BlockTraits/flowingLiquid";
import { LiquidInteractionBlockTrait } from "./BlockTraits/liquidInteraction";

export class LiquidPlugin extends Plugin implements PluginEvents {
  public readonly type = PluginType.Addon;
  public readonly activeTraits = [
    LiquidInteractionBlockTrait,
    SourceLiquidBlockTrait,
    FlowingLiquidBlockTrait,
  ];

  public constructor() {
    super("lousy-liquids", "0.1.1");
  }

  public onInitialize(): void {
    this.logger.info("Initializing block traits...");
    this.serenity.on(WorldEvent.WorldInitialize, ({ world }) => {
      for (let trait of this.activeTraits) {
        world.blockPalette.registerTrait(trait);
      }
      this.logger.info("Loaded liquid block traits.");
    });
  }

  public onStartUp(): void {
    this.logger.info(
      "Loaded §bLousy §3Liquids§r §8by §5palm1 §7- §8v" + this.version + "§r"
    );
  }
}

export default new LiquidPlugin();
