<template>
  <div class="navbar-container">
    <i class="el-icon-notebook-1 logo">Minotes</i>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/booknotes">All Notes</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/newbooknote">Add Notes</router-link>
      </el-menu-item>
      <el-menu-item index="3">Logout</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.logo {
  font-size: 30px;
  color: #0bb5ff;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}
</style>