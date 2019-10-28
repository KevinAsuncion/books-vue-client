<template>
  <div class="navbar-container">
    <i class="el-icon-notebook-1 logo"></i>
    <el-menu mode="horizontal">
      <el-submenu v-if="auth" index="1">
        <template slot="title">Menu</template>
        <router-link to="/booknotes">
          <el-menu-item index="1">All Books</el-menu-item>
        </router-link>
        <router-link to="/booknotes/new">
          <el-menu-item index="2">Add Book</el-menu-item>
        </router-link>
        <el-menu-item index="3">Logout</el-menu-item>
      </el-submenu>
      <el-submenu v-else index="2">
        <template slot="title">Menu</template>
        <router-link to="/login">
          <el-menu-item index="1">Login</el-menu-item>
        </router-link>
        <router-link to="/signup">
          <el-menu-item index="2">Signup</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false
    };
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
  margin-left: 1rem;
  margin-right: 1rem;
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