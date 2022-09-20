<template>
  <div>children:count{{ count }}</div>
  <div>children:a{{ a }}</div>
  <div class="txt" @click="txtClick">text color bind js color</div>
  <hr />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, ref } from "vue";

const count = ref(0);
const a = ref(0);

const props = defineProps({
  title: String,
});

const emit = defineEmits(["click"]);
console.log("defineProps", props.title);
const txtClick = () => {
  emit("click", "textClick");
};

defineExpose({
  count,
});
</script>

<style lang="scss" scoped></style>
