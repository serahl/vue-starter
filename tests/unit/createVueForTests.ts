/* tslint:disable:no-var-requires */
import Vuex from "vuex";
require("babel-plugin-require-context-hook/register")();
const modules = require("../../src/store/modules").default;
import { createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  modules
});
const testVue = { localVue, store };
export { testVue };
