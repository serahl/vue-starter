import { shallowMount } from "@vue/test-utils";
import DefaultMessageComponent from "@/components/basic/DefaultMessageComponent.vue";
import { testVue } from "./createVueForTests";

describe("DefaultMessageComponent.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(DefaultMessageComponent, {
      ...testVue
    });
    expect(wrapper.html()).toMatch("<input id=\"nameinput\"");
    expect(wrapper.text()).toMatch("Your name");
    expect(wrapper.text()).toMatch("Hello");
  });
});
