export const myDirective = {
  beforeMount: (el: HTMLElement, binding: any) => {
    console.log("我是自定义指令，在beforeMount执行了", el);
    /**
     * el: 指令绑定的元素
     * binding：{
     *  value:传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
     *  oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
     *  arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
     *  modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
     *  instance：使用该指令的组件实例。
     * }
     * vnode:代表绑定元素的底层 VNode。
     */
    console.log("binding", binding);
  },
};
