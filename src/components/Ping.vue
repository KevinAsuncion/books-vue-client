<template>
  <div>{{msg}}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ping",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    async getMessage() {
      try {
        const path = "http://127.0.0.1:5000/ping";
        const res = await axios.get(path);
        this.msg = res.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  created() {
    this.getMessage();
  }
};
</script>

<style scoped>
</style>