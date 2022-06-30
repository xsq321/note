#### 1. 基本概念

git是一个免费的、开源的分布式版本控制系统

##### 1.1. 基础命令

```
--git --version	//版本
--git config --global user.name "demo"	//设置名字；global表示当前用户；类似的还有system，表示整个系统；不写表示当前项目
--git config --global user.email 308327267@qq.com		
--git config --list		//查看配置
--git init	//初始化仓库

git是用linux命令操作的：		mkdir创建文件夹, touch创建文件
--clear 	//清除屏幕，也可以ctrl+l快捷键换页（推荐，因为其依然可以看到历史信息）
--echo 'c'		//往控制台输出信息；echo '' > test.txt 表示在当前目录创建一个空的txt文件
--ll	//查看当前目录下的所有文件；ll -a表示查看隐藏文件
--find 目录名		//将对应目录下的子孙文件及目录平铺在控制台，目录名可以是./
--find 目录名 -type f		//将对应目录下的文件平铺在控制台，没有目录了
--rm 文件名	//删除文件
--mv 原文件 重命名文件		//文件重命名
--cat 文件的url	//查看对应文件的内容
--vim url  /进入文件内容界面
	按 i 进入编辑模式 （需使输入法在英文模式下）
	按下esc后再输入冒号':'，后面接一下命令
		q!	强制退出（不保存）
		wq	保存并退出
		set nu	显示行号，不会导致退出
--vim 文件名	//没有则会直接创建一个文件，并进入
	按esc后再按yy就可以复制一行，再按p就粘贴

```

![image-20220508151818580](C:\Users\30832\AppData\Roaming\Typora\typora-user-images\image-20220508151818580.png)

##### 1.2. 六个概念

###### 1.2.1. 区域

工作区、暂存区、版本库

###### 1.2.2. 对象

git对象：

树对象：

提交对象