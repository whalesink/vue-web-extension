import * as fs from "fs";
import { resolve } from "path";
import Logger from "./logger";
import manifest from "../src/manifest";
import { PluginOption } from "vite";

const outDir = resolve(__dirname, "..", "public");

export default function buildManifest(): PluginOption {
  return {
    name: "build-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, "manifest.json");

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

      Logger(`\n📋 Manifest file copy complete: ${manifestPath}`, "FgYellow");
    },
  };
}
