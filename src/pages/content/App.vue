<template>
  <div class="title">
    <el-icon color="#ff0000" size="20"><CloseBold /></el-icon>
    inject content to web pages
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
    return {};
  },
});
</script>

<style lang="scss" scoped>
.title {
  color: red;
  font-size: 22px;
  font-weight: bold;
}
</style>
