<template>
  <div class="table-container">
    <el-table
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()) || data.author.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      stripe
      @row-click="handleClick"
    >
      <el-table-column label="Title" prop="title" sortable></el-table-column>
      <el-table-column label="Author" prop="author" sortable></el-table-column>
      <el-table-column label="Rating" prop="rating" sortable>
        <template slot-scope="scope">
          <el-rate disabled v-model="scope.row.rating"></el-rate>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-view"
              @click="handleView(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <template slot="empty" slot-scope="scope">
        <router-link to="/booknotes/new">
          <el-button>Add new Booknotes</el-button>
        </router-link>
      </template>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookNotes",
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row.id);
    },
    handleDelete(index, row) {
      console.log(index, row.id);
    },
    handleView(index, row) {
      this.$router.push("/booknotes/detail");
      console.log(index, row.id);
    },
    handleClick(column, row, event) {
      this.$router.push("/booknotes/detail");
    },
    async getBookNotes() {
      try {
        const path = "http://127.0.0.1:5000/booknotes";
        const res = await axios.get(path);
        console.log(res);
        this.tableData = res.data.book_notes;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  created() {
    this.getBookNotes();
  }
};
</script>


<style scoped>
.table-container {
  width: 90%;
  margin: 0 auto;
}

.searchbar {
  width: 75%;
}
</style>