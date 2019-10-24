<template>
  <div class="add-note-container">
    <form>
      <div class="title-author-container">
        <el-input placeholder="Enter title" v-model="title" clearable></el-input>
        <el-input placeholder="Enter author" v-model="author" clearable></el-input>
        <el-rate v-model="rating" @change="handleChange"></el-rate>
      </div>
      <vue-editor v-model="content"></vue-editor>
      <el-button type="primary" @click="handleClick">Save</el-button>
    </form>
  </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import axios from "axios";
export default {
  data() {
    return {
      content: "",
      title: "",
      author: "",
      rating: null
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async handleClick() {
      const res = await axios.post("http://127.0.0.1:5000/booknotes", {
        title: this.title,
        content: this.content,
        author: this.author,
        rating: this.rating
      });
      console.log(res);
    },
    handleChange() {
      console.log(this.rating);
    }
  }
};
</script>

<style scoped>
.el-input {
  font-size: 20px;
  margin-bottom: 1.5rem;
}
.title-author-container {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  flex-direction: column;
}
.add-note-container {
  width: 80%;
  margin: 0 auto;
}
.el-button {
  margin-top: 10px;
  margin-bottom: 20px;
}

.quillWrapper {
  margin-top: 1.5rem;
}
</style>