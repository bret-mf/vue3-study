<template>
  <h1>3.reactive、shallowReactive函数</h1>
  <h2>3.1:reactive</h2>
  <div>count:{{ count }} | state.count:{{ state.count }}</div>
  <button @click="addCount">count加1</button>
  <button @click="addStateCount">state.count加1</button>
  <h2>2.1:shallowReactive</h2>
  <div>
    shallowState.foo:{{ shallowState.foo }} | shallowState.next.bar:{{
      shallowState.next.bar
    }}
  </div>
  <button @click="changeFoo">改变foo</button>
  <button @click="changeNextBar">改变next.bar</button>
  <hr />
</template>

<script>
import {
  ref,
  defineComponent,
  reactive,
  shallowReactive,
  isReactive,
} from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    const state = reactive({ count });
    console.group("reactive");

    console.log("count", count);
    console.log("state", state);
    console.log("count.value === state.count:", count.value === state.count);
    const addCount = () => {
      count.value++;
    };

    const addStateCount = () => {
      state.count++;
    };

    const shallowState = shallowReactive({ foo: 1, next: { bar: 2 } });
    console.log("foo:isReactive", isReactive(shallowState.foo));
    console.log("next:isReactive", isReactive(shallowState.next));
    const changeFoo = () => {
      shallowState.foo++;
    };

    const changeNextBar = () => {
      shallowState.next.bar = 4;
    };
    console.groupEnd();
    return {
      count,
      state,
      shallowState,
      addCount,
      addStateCount,
      changeFoo,
      changeNextBar,
    };
  },
});
</script>
