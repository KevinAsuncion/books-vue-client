<template>
  <div class="add-note-container">
    <form>
      <div class="title-author-container">
        <el-input placeholder="Enter title" v-model="title" clearable></el-input>
        <el-input placeholder="Enter author" v-model="author" clearable></el-input>
      </div>
      <el-rate v-model="rating" @change="handleChange"></el-rate>
      <vue-editor v-model="content"></vue-editor>
      <el-button type="primary" @click="handleClick">Save</el-button>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

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
    handleClick() {
      console.log(this.content);
    },
    handleChange() {
      console.log(this.rating);
    }
  }
};
</script>

<style scoped>
.el-rate {
  font-size: 20px;
}
.el-input {
  font-size: 24px;
  margin-bottom: 2rem;
}
.title-author-container {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.add-note-container {
  width: 80%;
  margin: 0 auto;
}
.el-button {
  margin-top: 10px;
  float: right;
}
</style>