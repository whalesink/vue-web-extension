import * as fs from "fs";
import { resolve } from "path";
import logger from "./logger";
import manifest from "../manifest";
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

      logger(`\n📋 Manifest file copy complete: ${manifestPath}`, "FgYellow");
    },
  };
}
