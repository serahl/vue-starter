import * as StoreModules from "../StoreModules";

const modules: any = {};

Object.keys(StoreModules).forEach((key: string) => {
  // // Register storemodule
  const m: any = (StoreModules as any)[key];
  const moduleName = m.modulename || key;
  modules[moduleName] = m;
});

export default modules;
