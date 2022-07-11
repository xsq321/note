<template>
  <div>
    <el-card>
      <div>
        请选择权限：
        <el-select v-model="rank" placeholder="请选择权限等级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="margin-top: 30px">
        <span v-if="rank === 'admin'"
          >当前权限为 admin ，可对用户列表进行增、删、改、查</span
        >
        <span v-else-if="rank === 'vip'"
          >当前权限为 vip ，可对用户列表进行增、删、改、查</span
        >
        <span v-else
          >当前权限为 user ，只可对用户列表进行查看，其他权限将被隐藏</span
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import { getRank, updateRank } from "@/api/user";
export default {
  data() {
    return {
      rank: "admin",
      options: [
        { value: "admin", label: "管理员" },
        { value: "vip", label: "会员用户" },
        { value: "user", label: "普通用户" },
      ],
    };
  },
  watch: {
    rank: {
      handler(newValue) {
        updateRank(newValue).then((res) => {});
      },
    },
  },
  created() {
    getRank().then((res) => {
      this.rank = res.data.rank;
    });
  },
};
</script>

<style lang="scss" scoped></style>
