<template>
  <div class="add-note-container">
    <form>
      <div class="title-author-container">
        <el-input placeholder="Enter title" v-model="title" clearable></el-input>
        <el-input placeholder="Enter author" v-model="author" clearable></el-input>
        <el-rate v-model="rating" @change="handleChange"></el-rate>
      </div>
      <vue-editor placeholder="Enter your notes here" v-model="content"></vue-editor>
      <el-button @click="handleSubmit" type="primary">Save</el-button>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
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
    async handleSubmit() {
      const res = await axios.put(
        `http://127.0.0.1:5000/booknotes/${this.$route.params.id}`,
        {
          title: this.title,
          content: this.content,
          author: this.author,
          rating: this.rating
        }
      );
      this.$router.push("/booknotes");
    },
    handleChange() {
      console.log(this.rating);
    }
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

<style>
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
  margin-top: 1.5rem;
}

#quill-container {
  height: 300px;
  margin-bottom: 1.5rem;
}
</style>