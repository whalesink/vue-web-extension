<template>
  <div>inject content to web pages</div>
</template>

<script lang="ts">
import { CloseBold } from "@element-plus/icons-vue";
import { ElIcon } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ElIcon,
    CloseBold,
  },

  setup() {
    chrome.runtime.onInstalled.addListener(() => {
      // chrome.browserAction.setBadgeText({ text: "1" });
      chrome.action.setBadgeText({
        text: "OFF",
      });
    });

    return {};
  },
});
</script>

<!-- 不支持在content scripts中预加载样式文件，故不能在SFC中编写style -->
