<template>
  <h1>1.setup:</h1>
  <button @click="count++">{{ count }}</button>
  <hr />
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  mounted() {
    console.log(this.count); // 0
  },
  setup(props) {
    console.log("访问 Props:" + props.title);
    const count = ref(0);

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
    };
  },
});
</script>
