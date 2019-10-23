<template>
  <div class="container">
    <el-table
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Title" prop="title" sortable></el-table-column>
      <el-table-column label="Author" prop="author" sortable></el-table-column>
      <el-table-column label="Rating" prop="rating" sortable></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="edium" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          title: "The Model Thinker",
          author: "JK Rowling",
          rating: 2
        },
        {
          title: "Harry Potter",
          author: "JK Rowling",
          rating: 3
        },
        {
          title: "To Kill a Mockingbird",
          author: "JK Rowling",
          rating: 4
        },
        {
          title: "Sapiens",
          author: "JK Rowling",
          rating: 5
        },
        {
          title: "The Model Thinker",
          author: "JK Rowling",
          rating: 6
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>



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
    },
    open1() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success"
      });
    }
  },
  created() {
    this.getMessage();
  }
};


<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.searchbar {
  width: 75%;
}
</style>