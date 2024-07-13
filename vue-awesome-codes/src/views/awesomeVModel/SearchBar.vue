<template>
  <div class="search-bar-container">
    <el-input
      v-model="_model.searchVal"
      style="max-width: 600px"
      :placeholder="_model.placeholder"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="_model.searchSelectVal" style="width: 90px">
          <el-option
            v-for="(item, index) in _model.options"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { useVModel } from "./useVModel";

const props = defineProps<{
  model: Record<string, any>;
}>();

const emits = defineEmits(["update:model"]);
const _model = useVModel(props, "model", emits);
</script>

<style scoped></style>
