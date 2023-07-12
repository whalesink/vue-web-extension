import App from "./App.vue";
import { createApp } from "vue";

const injectContent = () => {
  const root = document.createElement("div");
  root.id = "chrome-extension-vue-root";
  document.body.append(root);

  createApp(App).mount("#chrome-extension-vue-root");
};

window.addEventListener("load", injectContent);
