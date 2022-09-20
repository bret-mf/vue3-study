<template>
  <h1>================以下是单组建================</h1>
  <setup-comp title="title" />
  <ref-comp />
  <reactive-comp />
  <computed-comp />
  <readonly-comp />
  <watch-comp />
  <inject-comp />
  <directive-comp />
  <bindcss-comp />
  <children-comp
    ref="childrenCompRef"
    title="children title"
    @click="childrenClick"
  />
</template>

<script lang="ts" setup>
import { onMounted, provide, ref } from "vue";
import SetupComp from "@/components/setup-comp.vue";
import RefComp from "@/components/ref-comp.vue";
import ReactiveComp from "@/components/reactive-comp.vue";
import ComputedComp from "@/components/computed-comp.vue";
import ReadonlyComp from "@/components/readonly-comp.vue";
import WatchComp from "@/components/watch-comp.vue";
import InjectComp from "@/components/inject-comp.vue";
import DirectiveComp from "@/components/directive-comp.vue";
import BindcssComp from "@/components/bindcss-comp.vue";
import ChildrenComp from "@/components/children-comp.vue";
import { fooSymbol } from "@/utils/injectSymbolKey";

const suffix = "_provide";
// 静态值
provide(`foo${suffix}`, "bar");
// 以symbol为key
provide(fooSymbol, "symbol key");

const count = ref(0);
// 响应式对象
provide(`count${suffix}`, count);

const childrenCompRef = ref<ChildrenComp | null>(null);

onMounted(() => {
  console.log(
    "childrenCompRef",
    childrenCompRef.value.a,
    childrenCompRef.value.count
  );
});

const childrenClick = (t: string) => {
  console.log("childrenClick", t);
};
</script>

<style scoped></style>
