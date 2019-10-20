<template>
  <div>
    <vue-editor v-model="content"></vue-editor>
    <el-button type="primary" @click="handleClick">Save</el-button>
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

<style>
</style>