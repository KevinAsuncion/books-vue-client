<template>
  <div class="booknote-container">
    <div class="title-author-rating-container">
      <h1>{{this.title}}</h1>
      <h3>{{this.author}}</h3>
      <el-rate disabled v-model="rating"></el-rate>
    </div>
    <el-divider></el-divider>
    <div class="editor-container">
      <div v-html="content"></div>
    </div>
    <el-button>Edit</el-button>
    <el-button>Delete</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      author: "",
      rating: null,
      content: ""
    };
  },
  async created() {
    const res = await axios.get(
      `http://127.0.0.1:5000/booknotes/${this.$route.params.id}`
    );
    this.title = res.data.booknote.title;
    this.author = res.data.booknote.author;
    this.rating = res.data.booknote.rating;
    this.content = res.data.booknote.content;
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