import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  data: () => {
    return {};
  },
  computed: {
    ...mapState("defaultstore", {}),
    ...mapGetters("defaultstore", {
      messagename: "defaultname",
      defaultmessage: "defaultmessage"
    })
  },
  methods: {
    ...mapMutations("defaultstore", {
      setName: "setDefaultNameEvent"
    })
  }
});
