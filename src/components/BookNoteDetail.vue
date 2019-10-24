<template>
  <div class="editor-container">
    <vue-editor v-model="content" placeholder="enter your notes here.."></vue-editor>
    <div v-html="content"></div>
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
.editor-container {
  margin: 2rem auto;
  width: 80%;
  text-align: center;
}

.quillWrapper {
  display: none;
}
</style>