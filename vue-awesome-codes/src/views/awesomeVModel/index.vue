<template>
  <main>
    <SearchBar v-model:model="searchModel" />
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SearchBar from "./SearchBar.vue";

const searchModel = ref({
  searchVal: "",
  searchSelectVal: 1,
  placeholder: "请输入关键字",
  options: [
    { label: "美食", value: 1 },
    { label: "新闻", value: 2 },
    { label: "游戏", value: 3 },
  ],
});
</script>

<style scoped></style>
