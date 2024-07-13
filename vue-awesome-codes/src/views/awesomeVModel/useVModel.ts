import { computed } from "vue";

export const useVModel = (prop: any, propName: string, emit: any) => {
  return computed({
    get() {
      return new Proxy(prop[propName], {
        set(obj, name, val) {
          emit("update:" + propName, { ...obj, [name]: val });
          return true;
        },
      });
    },
    set() {},
  });
};
