<template>
  <h1>2.ref、shallowRef、triggerRef函数</h1>
  <h2>2.1:ref</h2>
  <div>count:{{ count }}</div>
  <button @click="add">加1</button>
  <h2>2.1:shallowRef</h2>
  <div>state.count:{{ state.count }}</div>
  <button @click="changeState">直接改变state</button>
  <button @click="addStateCount">改变state中的count</button>
  <h2>2.3:triggerRef</h2>
  <div>say:{{ say.hello }}</div>
  <button @click="triggerSayChange">通过triggerRef更新</button>
  <hr />
</template>

<script>
import { ref, defineComponent, shallowRef, triggerRef } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    const state = shallowRef({ count: 0 });
    const say = shallowRef({ hello: "say hello!" });

    const add = () => {
      count.value++;
    };

    const addStateCount = () => {
      state.value.count = 2;
    };

    const triggerSayChange = () => {
      say.value.hello = "hello world!";
      triggerRef(say);
    };

    const changeState = () => {
      state.value = { count: 2 };
    };

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
      state,
      say,
      add,
      addStateCount,
      changeState,
      triggerSayChange,
    };
  },
});
</script>
