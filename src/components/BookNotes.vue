<template>
  <div class="table-container">
    <el-table
      v-if="tableData"
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
    </el-table>
    <div v-else>
      Looks like you have no notes, let's add some
      <el-button>Add A Book Note</el-button>
    </div>
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
          rating: 1,
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
    },
    handleClick(column, row, event) {
      this.$router.push("/booknotes/detail");
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
.table-container {
  width: 90%;
  margin: 0 auto;
}

.searchbar {
  width: 75%;
}
</style>