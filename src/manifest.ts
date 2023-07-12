import type { Manifest } from "webextension-polyfill";
import { version, description, displayName } from "../package.json";

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: displayName,
  version,
  description,
  options_ui: {
    page: "src/pages/options/index.html",
  },
  // background: {
  //   service_worker: "src/pages/background/index.js",
  //   type: "module",
  // },
  action: {
    default_title: "Popup",
    default_popup: "src/pages/popup/index.html",
    default_icon: "icon/d-32.png",
  },
  // chrome_url_overrides: {
  //   newtab: "src/pages/newtab/index.html",
  // },
  icons: {
    "16": "icon/d-16.png",
    "32": "icon/d-32.png",
    "48": "icon/d-48.png",
    "128": "icon/d-128.png",
  },
  permissions: ["activeTab"],
  content_scripts: [
    {
      js: ["src/pages/content/index.js"],
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["/src/pages/content/*"],
      matches: ["<all_urls>"],
    },
  ],
};

export default manifest;
