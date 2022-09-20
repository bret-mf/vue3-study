<template>
  <setup-comp title="title" />
  <ref-comp />
  <reactive-comp />
  <computed-comp />
  <readonly-comp />
  <watch-comp />
  <inject-comp />
</template>

<script>
import { provide, ref } from "vue";
import SetupComp from "@/components/setup-comp.vue";
import RefComp from "@/components/ref-comp.vue";
import ReactiveComp from "@/components/reactive-comp.vue";
import ComputedComp from "@/components/computed-comp.vue";
import ReadonlyComp from "@/components/readonly-comp.vue";
import WatchComp from "@/components/watch-comp.vue";
import InjectComp from "@/components/inject-comp.vue";
import { fooSymbol } from "@/utils/injectSymbolKey";

export default {
  components: {
    SetupComp,
    RefComp,
    ReactiveComp,
    ComputedComp,
    ReadonlyComp,
    WatchComp,
    InjectComp,
  },
  setup() {
    const suffix = "_provide";
    // 静态值
    provide(`foo${suffix}`, "bar");
    // 以symbol为key
    provide(fooSymbol, "symbol key");

    const count = ref(0);
    // 响应式对象
    provide(`count${suffix}`, count);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
