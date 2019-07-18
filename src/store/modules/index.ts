const requireModule = require.context(".", false, /\.ts$/);
const modules: any = {};
requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === "./index.ts") {
    return;
  }
  const module = requireModule(fileName).default;
  const moduleName = module.modulename
    ? module.modulename
    : fileName.replace(/(\.\/|\.ts)/g, "");

  modules[moduleName] = {
    namespaced: false,
    ...module
  };
});
export default modules;
