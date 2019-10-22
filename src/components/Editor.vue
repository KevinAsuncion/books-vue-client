<template>
  <div>
    <form>
      <div class="title-author-container">
        <input placeholder="Enter title" class="title" type="text" />
        <input placeholder="Enter author" class="author" type="text" />
      </div>
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
      content: ""
    };
  },
  components: {
    VueEditor
  },
  methods: {
    handleClick() {
      console.log(this.content);
    }
  }
};
</script>

<style scoped>
.title-author-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.title,
.author {
  height: 5rem;
  font-size: 1.5rem;
  width: 50%;
  border: none;
  outline: none;
}

input:focus {
  border: none;
  border-color: transparent;
  border-bottom: 2px solid red;
}
</style>