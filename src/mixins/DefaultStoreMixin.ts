import Vue from "vue";
import StoreNames from "@/store/StoreNames";
import { mapState, mapGetters, mapMutations } from "vuex";

const storeName = StoreNames.DEFAULTSTORE;

export default Vue.extend({
  data: () => {
    return {};
  },
  computed: {
    ...mapState(storeName, {}),
    ...mapGetters(storeName, {
      messagename: "defaultname",
      defaultmessage: "defaultmessage"
    })
  },
  methods: {
    ...mapMutations(storeName, {
      setName: "setDefaultNameEvent"
    })
  }
});
