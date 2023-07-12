<template>
  <div class="page">
    <el-icon color="#ff0000" size="20"><CloseBold /></el-icon>
    Popup
  </div>
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

<style lang="scss" scoped>
.page {
  width: 300px;
  padding: 15px;
}
</style>
