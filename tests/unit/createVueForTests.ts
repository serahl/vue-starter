/* tslint:disable:no-var-requires */
import Vuex from "vuex";
import modules from "@/store/modules";
import { createLocalVue } from "@vue/test-utils";
import "@/registerBasicComponents";

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  modules
});
const testVue = { localVue, store };
export { testVue };
