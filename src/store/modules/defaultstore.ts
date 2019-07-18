import StoreNames from "../StoreNames";
const mystate = {
  defaultmessage_prefix: "Hello",
  defaultname: "Default"
};

const getters = {
  defaultmessage: (state: any) => {
    return state.defaultmessage_prefix + " " + state.defaultname;
  },
  defaultname: (state: any) => {
    return state.defaultname;
  }
};

const actions = {};

const mutations = {
  setDefaultName: (state: any, newName: string) => {
    state.defaultname = newName;
  },
  setDefaultNameEvent: (state: any, event: Event) => {
    if (event && event.target) {
      mutations.setDefaultName(state, (event.target as HTMLInputElement).value);
    }
  }
};

export default {
  namespaced: true,
  modulename: StoreNames.DEFAULTSTORE,
  state: mystate,
  getters,
  actions,
  mutations
};
