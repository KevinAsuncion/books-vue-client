<template>
  <div class="navbar-container">
    <i class="el-icon-notebook-1 logo">Minotes</i>
    <!-- :default-active="activeIndex"  -->
    <el-menu mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">Menu</template>
        <router-link to="/booknotes">
          <el-menu-item index="1-1">All Books</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">Add Book</el-menu-item>
        <el-menu-item index="1-3">Logout</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="1">
      
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/booknotes/new">Add Notes</router-link>
      </el-menu-item>
      <el-menu-item index="3">Logout</el-menu-item>-->
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
.logo {
  font-size: 30px;
  color: #0bb5ff;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin-left: 1rem;
}

a {
  text-decoration: none;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>