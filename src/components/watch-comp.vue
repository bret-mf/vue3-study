<template>
  <h1>6.watchEffect和watch函数</h1>
  <div>count:{{ count }}</div>
  <div>title:{{ title }}</div>
  <div>other:{{ other }}</div>
  <button @click="addCount">count++</button>
  <button @click="changeOther">改变other</button>
  <button @click="changeStateCount">改变state.count</button>
  <button @click="changeStateB">改变state.b</button>
  <hr />
</template>

<script>
import { ref, defineComponent, watch, watchEffect, reactive } from "vue";

export default defineComponent({
  setup() {
    const count = ref(1);
    const title = ref("title");
    const other = ref("other");

    watchEffect(() => {
      console.log("watchEffect:count", count.value);
      console.log("watchEffect:title", title.value);
    });

    watch(other, () => {
      console.log("watch:other", other.value);
    });

    watch(
      [other, title],
      () => {
        console.log("watch:two:other", other.value);
        console.log("watch:two:title", title.value);
      },
      { immediate: true }
    );

    const addCount = () => {
      count.value++;
    };

    const changeOther = () => {
      other.value = "change other";
    };

    const state = reactive({ count: 1, b: 2 });
    watch(
      state,
      () => {
        console.log("watch:state", state.count);
      },
      { immediate: true }
    );

    const changeStateCount = () => {
      state.count++;
    };
    const changeStateB = () => {
      state.count++;
    };

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
      title,
      other,
      addCount,
      changeOther,
      changeStateCount,
      changeStateB,
    };
  },
});
</script>
