import Vue from "vue";
// Require in a base component context
const requireComponent = require.context(
  "./components/basic/",
  false,
  /[\w-]+\.vue$/
);
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  const componentName = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});
