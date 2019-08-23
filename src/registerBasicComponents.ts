import Vue from "vue";
import * as BasicComponents from "@/components/basic";

Object.keys(BasicComponents)
  .map(key => (BasicComponents as any)[key])
  .forEach((c: any) => {
    // // Register component globally
    Vue.component(c.options.name, c);
  });
