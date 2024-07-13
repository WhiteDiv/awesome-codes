import { computed } from "vue";

/**
 * @param props 组件接收的props
 * @param propName 需要代理props的哪一个key
 * @param emit 组件的emit方法
 * @returns 通过computed包装的变量
 *
 * new Proxy(target, handler)
 * Proxy可以实现对目标对象的劫持，并生成一个代理对象。Proxy构造函数接收两个参数
 * target：代理的目标对象
 * handler：对目标对象的操作
 *
 * Proxy陷阱：可以拦截对目标对象的一些列操作
 * handler.set(target, property, value): 设置属性值的拦截
 */

export const useVModel = (props: any, propName: string, emit: any) => {
  return computed({
    get() {
      return new Proxy(props[propName], {
        set(target, property, value) {
          emit("update:" + propName, { ...target, [property]: value });
          return true; // 必须返回true代表成功
        },
      });
    },
    set() {},
  });
};
