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
    <el-button @click="handleEdit">Edit</el-button>
    <el-popover placement="top" width="215" v-model="deletePopOver">
      <p>Are you sure you want to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="handleDeleteCancel">cancel</el-button>
        <el-button type="primary" size="mini" @click="handleDeleteConfirm">confirm</el-button>
      </div>
      <el-button slot="reference">Delete</el-button>
    </el-popover>
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
      content: "",
      deletePopOver: false
    };
  },
  methods: {
    handleDeleteCancel() {
      this.deletePopOver = false;
    },
    async handleDeleteConfirm() {
      axios.delete(`http://127.0.0.1:5000/booknotes/${this.$route.params.id}`);
      this.deletePopOver = false;
      this.$router.push("/booknotes", () => {
        this.$router.go();
      });
    },
    handleEdit() {
      this.$router.push(`/booknotes/${this.$route.params.id}/edit`);
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

<style scoped>
.editor-container {
  margin: 2rem 2rem;
}

.quillWrapper {
  display: none;
}

.title-author-rating-container {
  text-align: center;
}
</style>