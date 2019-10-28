<template>
  <div class="table-container">
    <el-table
      height="500"
      v-loading="loading"
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()) || data.author.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      stripe
      @row-click="handleClick"
    >
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" placeholder="Type to search" />
        </template>
        <el-table-column label="Title" prop="title" sortable></el-table-column>
        <el-table-column label="Author" prop="author" sortable></el-table-column>
        <el-table-column v-if="this.windowWidth > 450" label="Rating" prop="rating" sortable>
          <template slot-scope="scope">
            <el-rate disabled v-model="scope.row.rating"></el-rate>
          </template>
        </el-table-column>
      </el-table-column>
      <template slot="empty" slot-scope="scope">
        <p>No results. Would you like to add a new book note?</p>
        <router-link to="/booknotes/new">
          <el-button>Add new Booknotes</el-button>
        </router-link>
      </template>
    </el-table>
    <i @click="handleNew" class="el-icon-circle-plus"></i>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  name: "BookNotes",
  data() {
    return {
      tableData: [],
      search: "",
      loading: false,
      windowWidth: window.innerWidth
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row.id);
    },
    handleNew() {
      this.$router.push("/booknotes/new");
    },
    handleClick(column, row, event) {
      this.$router.push(`/booknotes/${column.id}`);
    },
    async getBookNotes() {
      try {
        const path = "http://127.0.0.1:5000/booknotes";
        const res = await axios.get(path);
        console.log(res);
        this.tableData = res.data.book_notes;
        this.loading = false;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  created() {
    this.getBookNotes();
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>


<style scoped>
.table-container {
  width: 100%;
  margin: 2rem auto;
}
tr .el-table__row {
  cursor: pointer;
}

body {
  margin: 0;
}
.searchbar {
  width: 75%;
}

.el-icon-circle-plus {
  font-size: 3rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  cursor: pointer;
}

@media only screen and (max-width: 450px) {
  #rating-col {
    visibility: hidden;
  }
}
</style>