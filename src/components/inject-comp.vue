<template>
  <h1>7.provide和inject</h1>
  <div>inject_foo:{{ foo }}</div>
  <div>
    inject_count:{{ count }} |
    <button @click="addCount">count++</button>
  </div>
  <div>inject has default: {{ defaultCount }}</div>
  <hr />
</template>

<script lang="ts">
import { inject, defineComponent, isRef, Ref } from "vue";
import { fooSymbol } from "@/utils/injectSymbolKey";

export default defineComponent({
  setup() {
    console.group("inject");
    const suffix = "_provide";
    const foo = inject(`foo${suffix}`);
    const count = inject<Ref<number>>(`count${suffix}`);
    console.log("count:isRef", count, isRef(count));

    const defaultCount = inject("count", 5);
    console.log("defaultCount:", defaultCount);

    const fSymbolKey = inject(fooSymbol);
    console.log("fSymbolKey:", fSymbolKey);

    const baz = inject("foo", () => new Map(), true);
    console.log("baz", baz);

    const fn = inject(
      "function",
      () => {
        console.log("我是注入的默认函数");
      },
      false
    );

    console.log("fn", fn);

    const addCount = () => {
      if (count) count.value++;
    };
    console.groupEnd();
    return {
      foo,
      count,
      defaultCount,
      isRef,
      addCount,
    };
  },
});
</script>

<style scoped></style>
