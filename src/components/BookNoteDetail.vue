<template>
  <div class="booknote-container">
    <div class="title-author-rating-container">
      <h1>{{this.title}}</h1>
      <h3>{{this.author}}</h3>
      <el-rate disabled v-model="this.rating"></el-rate>
    </div>
    <el-divider></el-divider>
    <div class="editor-container">
      <vue-editor v-model="content" placeholder="enter your notes here.."></vue-editor>
      <div v-html="content"></div>
    </div>
    <el-button>Edit</el-button>
    <el-button>Delete</el-button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  data() {
    return {
      title: "Harry Potter and The Sorceress Stone",
      author: "JK Rowling",
      rating: 5,
      content: "<h1>Hello</h1> <h2>Cool</h2>"
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

.title-author-rating-container {
  text-align: center;
}
</style>