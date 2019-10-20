<template>
  <div id="app">
    {{msg}}
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello from the app page"
    };
  }
};
</script>

<style>
</style>



