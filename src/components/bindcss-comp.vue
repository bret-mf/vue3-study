<template>
  <div class="txt">text color bind js color</div>
  <hr />
</template>

<script lang="ts" setup>
const color = "red";
</script>

<style scoped>
.txt {
  color: v-bind(color);
}
</style>
