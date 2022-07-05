1. window.innerHeight可以获取网页的高度，用于响应式设计

2. 登录qq，ctrl+alt+A截图时，可以获取到鼠标位置的颜色值

3. el-table与el-switch结合使用时失效的问题：用template包裹可解决

   ```html
   <template slot-scope="scope">
   	<el-switch v-model="scope.row.state">  //scope.row代表当前循环到的数据对象
   	</el-switch>
   </template>
   ```

4. mysql模块的使用：创建一个db文件夹，下新建index.js，在里面统一初始化并创建连接池；在路由模块里面引入之后，在路由回调函数里面使用db.query；注意：返回的结果results只能在db.query本身回调函数才能使用，甚至不能通过深拷贝赋值

   ```javascript
   router.get('/user', (req, res) => {
     const sql = 'select * from users'
     db.query(sql, (err, results) => {
       res.send({
         data: results  //是个数组
       })
     })
   })
   ```

5. vue使用axios获取数据时，一定要注意数据的层级关系，尤其是一些同名的：res.data.data

6. ==每次修改数据库数据后，需要使用this.$router.go(0)刷新页面，才能重新渲染==

7. el-menu中router属性表示将index作为路由进行跳转

8. 在input框中使用图标：`<el-input prefix-icon="el-icon-lock">` 添加头部图标；suffix-icon为尾部

9. 获取数据库时间总是前一天；其实是前八个小时，是数据库时区的问题

   ```mysql
   select now();		//查看时间
   show variables like '%time_zone%';		//查看数据库时区
   set global time_zone = '+8:00';		//将时区设置为东八区
   flush privileges; 		//刷新权限，然后退出重新登录即可
   -----------------------------------------------------------
   //修改my.cnf可以实现永久修改MySQL时区
   cd /etc
   vim my.cnf
   //然后在mysqlId下边的配置中添加一行：
   default-time_zone = '+8:00'
   /然后重启mysql:
   service mysql restart
   sudo systemctl restart mysqld
   ```

   ==同时需在el-date-picker中添加value-format="yyyy-MM-ddTHH:mm:ss"统一格式==   ；插入数据库要加T，查询显示时要变成空格

10. 使用el-select时，v-for循环的数据options是需要获取数据库的数据时，没有数据的解决办法：

    为el-select加上remote属性，表示远程搜索；并为选中值（该项目为sportsName）设定一个不为空的初始值

11. 表单规则报错：

    ```javascript
    <el-form :model='joinForm' :rules="rules" class="demo-ruleForm">
      <el-form-item label="用户名/学号" :label-width="formLabelWidth" prop="username">
        <el-input v-model="joinForm.username"></el-input>
      </el-form-item>
    </el-form>
    ```

    prop的值与v-model的值必须一样；这里即为 username 和 joinForm.username ;为什么可以这样还不清楚

12. 当要展示的数据需要通过多个过滤条件筛选时，可以将其放入计算属性中，将能省去很多不必要的麻烦

13. 刷新时，数据就没了的问题：放在

#### 一些用法

| 语句，代码           | 作用         |
| -------------------- | ------------ |
| this.$route.fullPath | 获取当前路由 |
|                      |              |
|                      |              |

