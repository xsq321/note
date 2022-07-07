<template>
  <div>
    <el-card>
      <el-button type="primary" id="new-button">新 建 用 户 </el-button>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column label="i d" prop="id"> </el-table-column>
        <el-table-column label="用 户 名" prop="username"> </el-table-column>
        <el-table-column label="密 码" prop="password"></el-table-column>
        <el-table-column label="操 作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.row.id)"
              >编 辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              >删 除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getUser } from "@/api/user.js";
export default {
  data() {
    return {
      tableData: [
        {
          id: "001",
          username: "admin",
          password: "123456",
        },
      ],
    };
  },
  methods: {
    handleEdit(id) {
      console.log(id);
    },
    handleDelete(id) {
      console.log(id);
    },
  },
  created() {
    getUser("hello").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>
#new-button {
  margin: 10px;
}
</style>
