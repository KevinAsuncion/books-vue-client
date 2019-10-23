<template>
  <div class="container">
    <el-table
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()) || data.author.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      stripe
    >
      <el-table-column label="Title" prop="title"></el-table-column>
      <el-table-column label="Author" prop="author"></el-table-column>
      <el-table-column label="Rating" prop="rating"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="medium" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleView(scope.$index, scope.row)">View</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
          rating: 2,
          id: "hello"
        },
        {
          title: "Harry Potter",
          author: "Another guy",
          rating: 3,
          id: "world"
        },
        {
          title: "To Kill a Mockingbird",
          author: "Girl",
          rating: 4,
          id: "again"
        },
        {
          title: "Sapiens",
          author: "Person",
          rating: 5,
          id: "here"
        },
        {
          title: "The Model Thinker",
          author: "Dude",
          rating: 6,
          id: "yo"
        }
      ],
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
    }
  }
};
</script>



// export default {
//   name: "Ping",
//   data() {
//     return {
//       msg: ""
//     };
//   },
//   methods: {
//     async getMessage() {
//       try {
//         const path = "http://127.0.0.1:5000/ping";
//         const res = await axios.get(path);
//         this.msg = res.data;
//       } catch (err) {
//         throw new Error(err);
//       }
//     },
//     open1() {
//       this.$notify({
//         title: "Success",
//         message: "This is a success message",
//         type: "success"
//       });
//     }
//   },
//   created() {
//     this.getMessage();
//   }
// };


<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.searchbar {
  width: 75%;
}
</style>