<template>
  <div @click="emitClick">emit text</div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emits = defineEmits(["click"]);

const emitClick = () => {
  emits("click", "emitClick");
};
</script>
