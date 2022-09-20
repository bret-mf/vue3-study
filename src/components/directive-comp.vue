<template>
  <div v-my-scope-directive>This is a Heading</div>
  <div v-my-directive:foo.bar="{ a: 'b' }">This is a Heading</div>
  <hr />
</template>

<script lang="ts" setup>
import { myDirective as vMyDirective } from "@/utils/customDirective";

const vMyScopeDirective = {
  beforeMount: (el: HTMLElement) => {
    // 在元素上做些操作
    console.log("我是局内自定义指令，在beforeMount执行了");
    el.style.color = "red";
  },
};
</script>

<style scoped></style>
