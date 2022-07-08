<template>
  <div>
    <el-card>
      <el-button
        type="primary"
        id="new-button"
        @click="dialogFormVisible = true"
        v-if="rank !== 'user'"
        >新 建 用 户
      </el-button>
      <!-- 新建用户对话框 -->
      <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="权限" :label-width="formLabelWidth">
            <el-select v-model="addForm.rank" placeholder="请选择权限等级">
              <el-option label="管理员" value="admin"></el-option>
              <el-option label="会员用户" value="vip"></el-option>
              <el-option label="普通用户" value="user"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmAddUser()">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 表格 -->
      <el-table :data="userList" style="width: 100%" stripe border>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column label="i d" prop="id"> </el-table-column>
        <el-table-column label="用 户 名" prop="username"> </el-table-column>
        <el-table-column label="密 码" prop="password"></el-table-column>
        <el-table-column label="权 限">
          <template slot-scope="scope">
            <span v-text="transform(scope.row.rank)"></span>
          </template>
        </el-table-column>
        <el-table-column label="操 作" v-if="rank !== 'user'">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.row.id)"
              style="margin-right: 5px"
              >编 辑</el-button
            >
            <!-- 编辑对话框 -->
            <el-dialog title="修改用户" :visible.sync="dialogEdit">
              <el-form :model="editForm">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="editForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                  <el-input v-model="editForm.password"></el-input>
                </el-form-item>
                <el-form-item label="权限" :label-width="formLabelWidth">
                  <el-select
                    v-model="editForm.rank"
                    placeholder="请选择权限等级"
                  >
                    <el-option label="管理员" value="admin"></el-option>
                    <el-option label="会员用户" value="vip"></el-option>
                    <el-option label="普通用户" value="user"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEdit = false">取 消</el-button>
                <el-button type="primary" @click="confirmUpdate()"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
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
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getRank,
} from "@/api/user.js";
export default {
  data() {
    return {
      userList: [],
      dialogFormVisible: false,
      dialogEdit: false,
      formLabelWidth: "60px",
      addForm: {
        username: "",
        password: "",
        rank: "",
      },
      editForm: {},
      rank: "admin",
    };
  },
  methods: {
    handleEdit(id) {
      this.dialogEdit = true;
      this.editForm = this.userList.find((item) => item.id === id);
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteUser(id).then((res) => {
            this.userList = res.data.userList;
            this.$message.success("删除成功");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    confirmAddUser() {
      if (this.addForm.username && this.addForm.password && this.addForm.rank) {
        this.dialogFormVisible = false;
        addUser(this.addForm).then((res) => {
          this.userList = res.data.userList;
          this.$message.success("添加成功");
          this.addForm = {
            username: "",
            password: "",
            rank: "",
          };
        });
      } else {
        this.$message.error("请补全所有表单内容");
      }
    },
    confirmUpdate() {
      if (
        this.editForm.username &&
        this.editForm.password &&
        this.editForm.rank
      ) {
        this.dialogEdit = false;
        updateUser(this.editForm).then((res) => {
          this.userList = res.data.userList;
          this.$message.success("修改成功");
        });
      } else {
        this.$message.error("请补全所有表单内容");
      }
    },
    transform(rank) {
      if (rank === "admin") return "管理员";
      else if (rank === "vip") return "会员用户";
      else return "普通用户";
    },
  },
  created() {
    getUser().then((res) => {
      this.userList = res.data.userList;
    });
    getRank().then((res) => {
      this.rank = res.data.rank;
    });
  },
};
</script>

<style lang="scss" scoped>
#new-button {
  margin: 10px;
}
</style>
