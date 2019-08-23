<template>
  <div>
    <label for="nameinput">
      Your name:
      <input id="nameinput" type="text" :value="messagename" @input="setName" />
    </label>
    <p>{{defaultmessage}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DefaultStoreMixin from "@/mixins/DefaultStoreMixin";
export default Vue.extend({
  name: "DefaultMessageComponent",
  mixins: [DefaultStoreMixin]
});
</script>


<style>
</style>
