<template>
  <div>
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  data() {
    return {
      content: "<h1>Hello</h1>"
    };
  },
  components: {
    VueEditor
  }
};
</script>

<style scoped>
</style>