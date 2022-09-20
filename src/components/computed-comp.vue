<template>
  <h1>4.computed函数</h1>
  <h2>4.1:只读的computed</h2>
  <div>getCount:{{ getCount }}</div>
  <h2>4.2:可以更改的computed</h2>
  <div>pushOne:{{ pushOne }}</div>
  <button @click="changePushOne">更新pushOne</button>
  <hr />
</template>

<script>
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const count = ref(1);

    const getCount = computed(() => {
      return count.value + 1;
    });

    getCount.value++;

    const pushOne = computed({
      get: () => count.value,
      set: (v) => {
        count.value += v;
      },
    });

    const changePushOne = () => {
      pushOne.value = 1;
      console.log("pushOne", pushOne.value);
    };

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
      getCount,
      pushOne,
      changePushOne,
    };
  },
});
</script>
