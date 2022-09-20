<template>
  <h1>5.readonly和shallowReadonly函数</h1>
  <h2>5.1:readonly</h2>
  <div>original.count:{{ original.count }} | copy.count:{{ copy.count }}</div>
  <button @click="changeOriginal">更新original.count</button>
  <button @click="changeCopy">更新copy.count</button>
  <h2>5.2:shallowReadonly</h2>
  <div>copy:isReadonly: {{ isReadonly(copy) }}</div>
  <div>copy.next:isReadonly: {{ isReadonly(copy.next) }}</div>
  <div>shallowCopy:isReadonly: {{ isReadonly(shallowCopy) }}</div>
  <div>shallowCopy.next:isReadonly: {{ isReadonly(shallowCopy.next) }}</div>
  <hr />
</template>

<script>
import {
  defineComponent,
  isReadonly,
  reactive,
  readonly,
  shallowReadonly,
} from "vue";

export default defineComponent({
  setup() {
    const original = reactive({ count: 1, next: { b: 2 } });
    const copy = readonly(original);

    const changeOriginal = () => {
      original.count++;
    };

    const changeCopy = () => {
      copy.count++;
    };

    copy.next.b++;
    const shallowCopy = shallowReadonly(original);
    console.group("readonly");
    console.log("copy:isReadonly", isReadonly(copy));
    console.log("copy.next:isReadonly", isReadonly(copy.next));
    console.log("shallowCopy:isReadonly", isReadonly(shallowCopy));
    console.log("shallowCopy.next:isReadonly", isReadonly(shallowCopy.next));
    shallowCopy.next.b++;
    console.groupEnd();
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      original,
      copy,
      shallowCopy,
      changeOriginal,
      changeCopy,
      isReadonly,
    };
  },
});
</script>
