<template>
  <div>
    <main>
      <div id="hero-text-container">
        <p>Keep all your book notes organized</p>
        <router-link to="/login">
          <el-button>Login</el-button>
        </router-link>
        <router-link to="/signup">
          <el-button type="primary">Signup</el-button>
        </router-link>
      </div>
      <div id="hero-image-container">
        <img src="../assets/reading.svg" alt="reading-image" id="reading-image" />
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
}
#reading-image {
  height: 100%;
  width: 100%;
}

#hero-text-container {
  font-size: 3rem;
  width: 50%;
}

#hero-image-container {
  width: 50%;
}
</style>