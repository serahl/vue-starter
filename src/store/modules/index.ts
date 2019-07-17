const requireModule = require.context(".", false, /\.ts$/);
const modules: any = {};
requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === "./index.ts") {
    return;
  }
  const moduleName = fileName.replace(/(\.\/|\.ts)/g, "");

  modules[moduleName] = {
    namespaced: false,
    ...requireModule(fileName).default
  };
});
export default modules;
