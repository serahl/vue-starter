/* tslint:disable:no-var-requires */
import Vuex from "vuex";
import modules from "../../src/store/modules";
import { createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  modules
});
const testVue = { localVue, store };
export { testVue };
