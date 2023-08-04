# Solidity 开发环境

1. Solidity编辑器：Solidity编辑器是一种专门用于编写和编辑Solidity代码的编辑器。常用的Solidity编辑器包括Visual Studio Code、Atom和Sublime Text。
2. 以太坊开发环境：以太坊开发环境（Ethereum Development Environment）是一种专门用于以太坊开发的工具，可以用于部署、测试和调试智能合约。常用的以太坊开发环境包括Truffle、Embark和Buidler （Hardhat）。
3. 以太坊虚拟机：以太坊虚拟机（Ethereum Virtual Machine，EVM）是以太坊区块链的运行环境，用于在以太坊区块链上运行智能合约。常用的以太坊虚拟机包括ganache-cli和geth。
4. 以太坊浏览器：以太坊浏览器是一种用于浏览、搜索和交互以太坊区块链数据的工具。常用的以太坊浏览器包括Etherscan、Etherchain和Blockchain Explorer。

##  [Hardhat](https://hardhat.org/)

https://hardhat.org/

Hardhat是目前最好的框架之一，支持快速测试，同时提供了最好的教程和最简单的集成。 老实说，每个喜欢JS框架的人都应该在某个时候试用Hardhat。它真的很容易上手，具有快速的测试， 而且入门非常简单。Hardhat的Discord也总是非常迅速地回答问题，因此，如果遇到问题，你 总是可以寻求帮助。Hathat使用Waffle和Ethers.js进行测试 —— 可以说是更好的JavaScript 智能合约框架 —— 开发人员的生活质量确实能得到一些改善。

Hardhat还可以与OpenZeppelin的可升级智能合约插件直接集成，这是一个巨大的胜利。 这个项目给人一种很棒的感觉：很干净。它会执行你想要的操作。真的很快。该项目正在不断改进， Hardhat显然致力于使智能合约开发人员的生活更轻松。

Hardhat概要：

ETH基金会资助的项目，以前的名字是Builder
技术：Javascript，Web3.js和Ethers.js插件，OpenZeppelin可升级合同插件， Etherscan插件，区块链分叉
区块链：Hardhat运行时环境/本地、测试网、主网
测试支持：Waffle
维护：非常活跃
支持：活跃
开源

## Truffle

https://trufflesuite.com/

几年来Truffle一直是以太坊智能合约的默认开发框架，这是有充分理由的。 Truffle是一个强大的框架，为其他许多人树立了标准。你很容易找到使用此平台的项目， 因此查找示例很容易。Truffle也可以很容易地与它的姊妹工具Drizzle和Ganache集成在一起。 特别是Ganache，它是工程师运行本地区块链的最流行方法之一。对于那些正在寻找更多工具的人， 你可以为升级的Truffle团队帐户付费，并可以访问智能合约的持续集成，可视化部署和监视。 Truffle还可以与OpenZeppelin的可升级智能合约插件直接集成，这是一个巨大的胜利。 Truffle的开发团队显然是一群有才华的工程师，他们想要使世界成为一个更好的智能合约场所。

Truffle测试的运行速度不如hardhat那样快，并且由于用户数量众多，获得支持可能很困难。 我很期待看到被ConsenSys收购后他们将如何改善这个项目。Truffle的文档质量似乎开始下降 并且很难遵循，但是如果你用Google搜索遇到的错误，则很可能会遇到遇到该错误并已解决的人。 我发现改善项目的一些最佳方法是在GitHub上发布问题。无论如何，保持生态系统不断壮大是我们 的开源职责！

由于几乎每个人都熟悉它，因此获得同行的支持通常很容易。我真的希望看到团队在这个项目 上获得更多支持，因为他们有这么多用户。我希望他们能看到本文并致力于改善其文档，以使 其能够继续作为测试和部署智能合约的首选平台之一。

Truffle概要：

使用最广泛的平台；最近被ConsenSys收购（2020年11月）
技术：Javascript，Web3.js，OpenZeppelin可升级合同插件，Etherscan插件，区块链分叉
区块链：Ganache /本地，测试网，主网
有测试
维护：非常活跃
支持：活跃
开源，可以付费升级

## Embark

Embark是整个DAPP框架。这是一个全栈的区块链平台。在Gitter的 一些帮助下，我能够将Chainlink合约部署到Kovan网络。它带有一个UI，允许你在GUI中与区块链 和合约进行交互。Embark有一段学习曲线，我没有花足够的时间来克服，但它展示了其潜力。这就是 为什么我想将其包括在这里的原因，因为我觉得我没有完全消化很多东西。

我希望看到人们更多地尝试该框架并看到其功能。由于在项目中花费的时间有限，我觉得我可能 无法在这里做到公正。我确实认为将前端与后端解耦仍然是最佳做法，但是如果你需要启动一个 具有良好前端的项目并且不关心解耦，那么您应该100％尝试这个项目。

这是一个很酷的项目，如果有人喜欢Hardhat和Truffle，并且又想与全栈解决方案集成，那么我愿意 推荐Embark给他。

Embark概要：

具有大量功能的JavaScript框架用于前端开发
技术：JavaScript，Web3.js，代理合约支持
区块链：Ganache /本地，测试网，主网
支持测试
维护：轻度活跃
支持：活跃
开源

# Remix基本使用

Remix 是以太坊智能合约编程语言Solidity IDE，其实基于浏览器的IDE，有一个很大的好处就是不用安装，打开即用。
[官网](https://remix.ethereum.org/) https://remix.ethereum.org/。

## Remix基本功能

![image-20221208134636521](https://gitee.com/fcjun/image/raw/master/img/image-20221208134636521.png)

## 合约创建

1. 如上图创建一个空的工作空间

2. 在工作空间下创建一个智能合约文件,ex: `HelloWord.sol`

   * 智能合约文件以`.sol`结尾，
   * 文件名采用大驼峰命名法
   * 文件名和合约名保持一致

3. 编写合约代码

   ```solidity
   // SPDX-License-Identifier: MIT; 
   // 智能合约的许可协议
   pragma solidity ^0.8.7;
   // 智能合约的适用版本
   contract HelloWord {
       string name;
       function get() public  view returns (string memory){
           return name;
       }
       function set (string memory _name)  public {
           name = _name;
       }
   }
   ```

   ![image-20221208140310359](https://gitee.com/fcjun/image/raw/master/img/image-20221208140310359.png)

   

## 合约编译

![image-20221208140810607](https://gitee.com/fcjun/image/raw/master/img/image-20221208140810607.png)

编译结果：

目录产生一个`artifacts` 文件夹

![image-20221208140957454](https://gitee.com/fcjun/image/raw/master/img/image-20221208140957454.png)

## 合约部署

1. 通过第四个菜单进入部署界面
2. 选择部署环境
3. 选择部署合约的账户地址
4. 设置gas限制
5. 选择要部署的合约
6. `deploy`按钮进行部署

   ![image-20221208141436813](https://gitee.com/fcjun/image/raw/master/img/image-20221208141436813.png)

部署成功效果

![image-20221208141815165](https://gitee.com/fcjun/image/raw/master/img/image-20221208141815165.png)

## 合约调试

1. 通过函数的返回值查看变量

![image-20221208142340517](https://gitee.com/fcjun/image/raw/master/img/image-20221208142340517.png)

2. event Log 

​       solidity默认没有consol.log 或者 print 类似的事件系统 但是我们可以通过，注册事件查看对应的log日志

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {

    event Log(address);
    event Log(uint);

    function doSomething() public {
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
        emit Log(timestamp);
        emit Log(sender);
    }
}
```

![image-20221208145721522](https://gitee.com/fcjun/image/raw/master/img/image-20221208145721522.png)

# 本地部署ReMix IDE

在线Remix访问缓慢，如果你有很好的网络环境也可以本地部署一套。
在本地部署Remix需要准备两个东西：一个是Remix-project，可以理解为Remix的前端；另一个是Remixd，可以理解为Remix的后端，它们的Github仓库地址分别是：
https://github.com/ethereum/remix-project
https://github.com/ethereum/remix-project/tree/master/libs/remixd

## Docker方式安装

如果要运行合并到主分支中的最新更改，请运行：

```powershell
docker pull remixproject/remix-ide:latest
docker run -p 8080:80 remixproject/remix-ide:latest
```

如果你想运行最新的 remix-live 版本运行。

```powershell
docker pull remixproject/remix-ide:remix_live
docker run -p 8080:80 remixproject/remix-ide:remix_live
```

## docker-compose方式安装

```powershell
docker-compose pull
docker-compose up -d
```

## 部署 Remixd

Remixd 的安装使用步骤如下：

1.通过 npm 或者 yarn 安装 Remixd（建议用yarn）

npm 命令：

```powershell
npm install -g @remix-project/remixd
yarn add global @remix-project/remixd
```

2.启动 Remix-IDE

```powershell
remixd -s ./shared_project -u http://localhost:8080
```

3.在 Remix-IDE 上点两下

一个点 Solidity，选择相应环境；另一个点 Connect to Localhost，连接本地环境

![](https://cdn.nlark.com/yuque/0/2022/png/22208307/1668418016050-d2ebc317-82b6-4c3d-9ad5-81f3718bcd3a.png)

![](https://cdn.nlark.com/yuque/0/2022/png/22208307/1668418041013-6189ebcf-06b2-44ef-8ab4-04b6e78b6739.png?x-oss-process=image%2Fresize%2Cw_1500%2Climit_0)

# Solidity基础介绍

## 认识一个最简单的存储合约

![image-20221214103704773](https://gitee.com/fcjun/image/raw/master/img/202212141037281.png)

```solidity
// SPDX-License-Identifier: MIT; 
// 智能合约的许可协议
pragma solidity ^0.8.7;
// 智能合约的适用版本
import "";
// 导入

contract HelloWord {
    string name;
    // 状态变量  
    // 函数
    function get() public  view returns (string memory){
        return name;
    }
    function set (string memory _name)  public {
        name = _name;
    }
}
```

### 授权协议

- 默认情况下，在发布源代码时加入机器可读许可证说明是很重要的。由于提供源代码总是涉及版权方面的法律问题，Solidity 编译器鼓励使用机器可读的 SPDX 许可证标识符,比如：`// SPDX-License-Identifier: MIT`

至于什么是SPDX 大家可以参考如下资料：

首先是SPDX，这是个组织名，其网站为：
[SPDX 许可证列表 |软件包数据交换 （SPDX）](https://spdx.org/licenses/)
SPDX-License-Identifier 组合起来就是在指SPDX的许可证列表
后面的格式为 ：+ SPDX的许可证列表中的某个许可证

比如上面例子中的MIT 许可：

MIT 基本信息
全名：MIT License [麻省理工学院许可证](https://spdx.org/licenses/MIT.html) 标志符：[MIT](https://zh.wikipedia.org/zh-cn/MIT許可證)
MIT的具体内容
特此免费授予获得（“软件”）副本的任何人不受限制地处理本软件的许可，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售本软件副本的权利

### Solidity版本限制

- 第二行是告诉编译器源代码所适用的Solidity版本为>=0.7.0 及 <0.9.0 。这样的说明是为了确保合约不会在新的编译器版本中发生异常的行为。关键字 `pragma` 是告知编译器如何处理源代码的通用指令

## 执行原理

在一个去中心化的世界，我们的程序并不紧紧活一台机器的CPU 上, 在一个去中心化的世界是由很多节点组成的P2P 网络。合约代码会在各节点上[[Full Node](https://ethereum.org/en/developers/docs/nodes-and-clients/)]单独运行，而事实上P2P的各节点相互之间都不信任的，所以每个节点都会存一份自己的状态（Distributed Ledger,分布式账本），在该示例就是name，当调用set()的时候，大家都改变了name，此时需要一种共识机制（PoS），如果PoS认为name合法，此次调用完成。 否则回滚上一个name的值，因此每一次改变状态变量的调用都是以一个事务Transcation来执行。

## Api文档

https://solidity-by-example.org/



## 变量



- **局部变量**

- - 在函数内部声明
  - 不存储到链上

- **状态变量**

- - 在函数外部声明
  - 状态变量是永久地存储在链上的值。

- **全局变量** 

- - 内置提供有关区块链的信息比如`block`、`msg`等

 全局变量 

这些是全局工作区中存在的特殊变量，提供有关区块链和交易属性的信息。

| 名称                                          | 返回                                                     |
| :-------------------------------------------- | :------------------------------------------------------- |
| blockhash(uint blockNumber) returns (bytes32) | 给定区块的哈希值 – 只适用于256最近区块, 不包含当前区块。 |
| block.coinbase (address payable)              | 当前区块矿工的地址                                       |
| block.difficulty (uint)                       | 当前区块的难度                                           |
| block.gaslimit (uint)                         | 当前区块的gaslimit                                       |
| block.number (uint)                           | 当前区块的number                                         |
| block.timestamp (uint)                        | 当前区块的时间戳，为unix纪元以来的秒                     |
| gasleft() returns (uint256)                   | 剩余 gas                                                 |
| msg.data (bytes calldata)                     | 完成 calldata                                            |
| msg.sender (address payable)                  | 消息发送者 (当前 caller)                                 |
| msg.sig (bytes4)                              | calldata的前四个字节 (function identifier)               |
| msg.value (uint)                              | 当前消息的wei值                                          |
| now (uint)                                    | 当前块的时间戳                                           |
| tx.gasprice (uint)                            | 交易的gas价格                                            |
| tx.origin (address payable)                   | 交易的发送方                                             |

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {


    function doSomething() public view returns(uint, address) {

        // 内置全局变量
        uint timestamp = block.timestamp; // 获取区块时间戳
        address sender = msg.sender; // 获取区块地址
        return (timestamp,sender);
    }
}
```

![image-20221208152548299](https://gitee.com/fcjun/image/raw/master/img/image-20221208152548299.png)

状态变量

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    uint public nun = 123;

    function doSomething() public{
        nun ++;
    }
}
```

![image-20221208152817271](https://gitee.com/fcjun/image/raw/master/img/image-20221208152817271.png)

局部变量

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    function doSomething() public pure  returns(uint){
        uint num = 123;
        num ++;
        // 局部变量不保存每次使用都重置
        return num;
    }
}
```

在为变量命名时，请记住以下规则。

- 不应使用 Solidity 保留关键字作为变量名。例如，`break`或`boolean`变量名无效。
- 不应以数字(0-9)开头，必须以字母或下划线开头。例如，`123test`是一个无效的变量名，但是`_123test`是一个有效的变量名。
- 变量名区分大小写。例如，`Name`和`name`是两个不同的变量。

## **Solidity 可见性修饰符**

1.public – 所有合约与账号都可以调用
2.private -只有在定义该函数的合约可以调用
3.internal- 当前合约或者继承该合约的，类似java 里面的protected 关键字。
4.external – 只有其他合约或者账号可以调用,定义该函数的合约不能调用,除非使用 this 关键字

![image-20221208153812857](https://gitee.com/fcjun/image/raw/master/img/image-20221208153812857.png)

## 函数

1. 函数是代码的可执行单元。函数通常在合约内部定义，但也可以在合约外定义。

   ```solidity
   // SPDX-License-Identifier: GPL-3.0
   pragma solidity >=0.8.0 <0.9.0;
   
   contract Storage {
       function set() public { // 定义函数
           // ...
       }
   }
   
   function OutsideFunc(uint x) pure returns (uint) {
       return x * 2;
   }
   ```

   

2. Solidity有两个关键字与函数输出相关：return和returns，他们的区别在于： 

   >  returns加在函数名后面，用于声明返回的变量类型及变量名。
   >
   > return用于函数主体中，返回指定的变量。

3. view和pure的用法

   > getter 类型的函数可以被view 或者 pure 修饰。 view 修饰的函数不能改变状态变量。pure 则既不能改变状态变量，也不取读取状态变量。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ViewPureTest {
    uint public x = 1;
    // 不能改变状态变量.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    //函数中没有任何状态变量出现。
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```

在我们无法确定该用view还是pure时，remix会给我们完善的提示信息

##  错误Errors

> - ```
>   assert(bool condition)
>   ```
>
>    
>
>   − 如果不满足条件，此方法调用将导致一个无效的操作码，对状态所做的任何更改将被还原。这个方法是用来处理内部错误的。
>
>   
>
> - `require(bool condition)` − 如果不满足条件，此方法调用将恢复到原始状态。此方法用于检查输入或外部组件的错误。
>
> - `require(bool condition, string memory message)` − 如果不满足条件，此方法调用将恢复到原始状态。此方法用于检查输入或外部组件的错误。它提供了一个提供自定义消息的选项。
>
> - `revert()` − 此方法将中止执行并将所做的更改还原为执行前状态。
>
> - `revert(string memory reason)` − 此方法将中止执行并将所做的更改还原为执行前状态。它提供了一个提供自定义消息的选项。

回退状态：但是gas费用是需要消耗

assert 合约内部错误

require 外部参数错误

```solidity
参数被2整除
```

assert 内部错误

Solidity 为应对失败，允许用户定义 `error` 来描述错误的名称和数据。 跟用错误字符串相比， `error` 更便宜并且允许你编码额外的数据，还可以用 NatSpec 为用户去描述错误。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

error NotFoundUser(address account, uint256 uid);

contract Token {
    mapping(address => uint256) users;

    function getUser(address _account, uint256 _uid) public view {
        uint256 uid = users[msg.sender];
        if (uid < _uid) {
            revert NotFoundUser(_account, _uid);
        }
        // ...
  
```



## 事件Event

事件是能方便地调用以太坊虚拟机日志功能的接口。



  solidity默认没有consol.log 或者 print 类似的事件系统 但是我们可以通过，注册事件查看对应的log日志

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {

    event Log(address);
    event Log(uint);

    function doSomething() public {
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
        emit Log(timestamp);
        emit Log(sender);
    }
}
```

![image-20221208145721522](https://gitee.com/fcjun/image/raw/master/img/image-20221208145721522.png)



#  变量的数据位置

## 数据位置

在合约中声明和使用的变量都有一个数据位置，指明变量值应该存储在哪里。合约变量的数据位置将会影响Gas消耗量。

Solidity 提供4种类型的数据位置。

- Storage
- Memory
- Calldata
- Stack

### Storage

该存储位置存储永久数据，这意味着该数据可以被合约中的所有函数访问。可以把它视为计算机的硬盘数据，所有数据都永久存储。

保存在存储区(Storage)中的变量，以智能合约的状态存储，并且在函数调用之间保持持久性。与其他数据位置相比，存储区数据位置的成本较高。

- 存储中的数据是永久存在的。存储是一个key/value库
- 存储中的数据写入区块链，因此会修改状态，这也是存储使用成本高的原因。
- 占用一个256位的槽需要消耗20000 gas
- 修改一个已经使用的存储槽的值，需要消耗5000 gas
- 当清零一个存储槽时，会返还一定数量的gas
- 存储按256位的槽位分配，即使没有完全使用一个槽位，也需要支付其开销

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract DataLocations {
    struct MyStruct {
        uint256 foo;
    }
    mapping(uint256 => MyStruct) public myStructs;

    function funcStorage(uint8 _idx, uint _val) public {
        // 从映射中获取结构体,storage 变量改变会影响状态变量的值
        MyStruct storage myStruct = myStructs[_idx];
        myStruct.foo = _val;
    }
}
```



### Memory

内存位置是临时数据，比存储位置便宜。它只能在函数中访问。

通常，内存数据用于保存临时变量，以便在函数执行期间进行计算。一旦函数执行完毕，它的内容就会被丢弃。你可以把它想象成每个单独函数的内存(RAM)。

- 内存是一个字节数组，槽大小位256位（32字节）
- 数据仅在函数执行期间存在，执行完毕后就被销毁
- 读或写一个内存槽都会消耗3gas
- 为了避免矿工的工作量过大，22个操作之后的单操作成本会上涨

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract DataLocations {
    struct MyStruct {
        uint256 foo;
    }
    mapping(uint256 => MyStruct) public myStructs;

    function funcStorage(uint8 _idx, uint _val) public view returns (MyStruct memory) {
        // 从映射中获取结构体,storage 变量改变会影响状态变量的值
        MyStruct memory myStruct = myStructs[_idx];
        myStruct.foo = _val;
        return myStruct;
    }
}
```



### Calldata

Calldata是不可修改的非持久性数据位置，所有传递给函数的值，都存储在这里。此外，Calldata是外部函数的参数(而不是返回参数)的默认位置。

### Stack

堆栈是由EVM (Ethereum虚拟机)维护的非持久性数据。EVM使用堆栈数据位置在执行期间加载变量。堆栈位置最多有1024个级别的限制。

可以看到，要永久性存储，可以保存在存储区(Storage)。

## 数据位置规则

### 规则1 – 状态变量

状态变量总是存储在存储区中。

```solidity
pragma solidity ^0.5.0;  

contract DataLocation {  

   // storage     
   uint stateVariable;  
   uint[] stateArray;  
}  
```

此外，不能显式地标记状态变量的位置。

```solidity
pragma solidity ^0.5.0;  

contract DataLocation {  

   uint storage stateVariable; // 错误  
   uint[] memory stateArray; // 错误  
} 
```

### 规则2 – 函数参数与返回值

函数参数包括返回参数都存储在内存中。

```solidity
pragma solidity ^0.5.0;  

contract DataLocation {  

   // storage     
   uint stateVariable;  
   uint[] stateArray;  

   function calculate(uint num1, uint num2) public pure returns (uint result) {
       return num1 + num2
   }
} 
```

此处，函数参数 `uint num1` 与 `uint num2`，返回值 `uint result` 都存储在内存中。

### 规则3 – 局部变量

值类型的局部变量存储在内存中。但是，对于引用类型，需要显式地指定数据位置。

```solidity
pragma solidity ^0.5.0;  

contract Locations {  

  /* 此处都是状态变量 */  

  // 存储在storage中  
  bool flag;  
  uint number;  
  address account;  

  function doSomething() public  {  

    /* 此处都是局部变量  */  

    // 值类型
    // 所以它们被存储在内存中
    bool flag2;  
    uint number2;  
    address account2;  

    // 引用类型，需要显示指定数据位置，此处指定为内存
    uint[] memory localArray;        
  }  
}  
```

不能显式覆盖具有值类型的局部变量。

```solidity
  function doSomething() public  {  

    /* 此处都是局部变量  */  
    // 值类型
    bool memory flag2;  // 错误
    uint Storage number2;  // 错误 
    address account2;  

  }   

```

### 规则4 – 外部函数的参数

外部函数的参数(不包括返回参数)存储在Calldata中。

## 赋值的数据位置规则



# Solidity数据类型

Solidity 是一种静态类型语言，这意味着每个变量（状态变量和局部变量）都需要在编译时指定变量的类型。

Solidity中，变量类型有以下几大类：

- 值类型
- 地址类型
- 引用类型

![](https://cdn.nlark.com/yuque/0/2022/png/22208307/1668480555162-4b659935-9b30-459d-8ed8-cd5a65c14de4.png)

## 值类型

| 类型       | 保留字           | 取值                                                         |
| :--------- | :--------------- | :----------------------------------------------------------- |
| 布尔型     | bool             | true/false                                                   |
| 整型       | int/uint         | 有符号整数/无符号整数。                                      |
| 整型       | int8 to int256   | 8位到256位的带符号整型数。int256与int相同。                  |
| 整型       | uint8 to uint256 | 8位到256位的无符号整型。uint256和uint是一样的。              |
| 定长浮点型 | fixed/unfixed    | 有符号和无符号的定长浮点型                                   |
| 定长浮点型 | fixedMxN         | 带符号的定长浮点型，其中M表示按类型取的位数，N表示小数点。M应该能被8整除，从8到256。N可以是0到80。fixed与fixed128x18相同。 |
| 定长浮点型 | ufixedMxN        | 无符号的定长浮点型，其中M表示按类型取的位数，N表示小数点。M应该能被8整除，从8到256。N可以是0到80。fixed与fixed128x18相同。 |

## 地址类型

地址类型表示以太坊地址，长度为20字节。地址可以使用`.balance`方法获得余额，也可以使用`.transfer`方法将余额转到另一个地址。

```javascript
address x = 0x212;
address myAddress = this;

if (x.balance < 10 && myAddress.balance >= 10) 
    x.transfer(10);
```

复制

## 引用类型/复合数据类型

Solidity中，有一些数据类型由值类型组合而成，相比于简单的值类型，这些类型通常通过名称引用，被称为引用类型。

引用类型包括：

- 数组 (字符串与bytes是特殊的数组，所以也是引用类型)
- struct (结构体)
- map (映射)

“`undefined`”或“`null`”值的概念在Solidity中不存在，但是新声明的变量总是有一个 默认值 ，具体的默认值跟类型相关。 要处理任何意外的值，应该使用错误处理来恢复整个交易，或者返回一个带有第二个`bool` 值的元组表示成功。

## **bool/布尔类型**

布尔值的取值范围为 true 和 false 。

默认值：`false`

```solidity
pragma solidity ^0.8.0;

contract TestBool {
  error NotEqual(bool A,bool B);
	bool public A; // false
	bool public B = true;	//true
  	// require(A==B,"A not equal B");

  if (A != B) {
    error NotEqual(A,B);
  }
}
```

运算符：
●!（逻辑非）
●&& （逻辑与， “and” ）
●|| （逻辑或， “or” ）
●== （等于）
●!= （不等于）

## **int、uint/整数类型**

> `int/uint：`变长的**有符号**或**无符号**整型。变量支持的步长以`8`递增，支持从`uint8`到`uint256`，以及`int8`到`int256`。需要注意的是，`uint`和`int`默认代表的是`uint256`和`int256`。

`int` 有符号整型(包含负数)

默认为`int256`

不同位长的整形范围如下：

- `int8` 取值范围：-(2 ** 7)到 2 ** 7 -1
- `int16`取值范围：-(2 ** 15)到 2 ** 15 -1
- ...
- `intX`取值范围：-(2**`X`-1)到 2**(`X`-1) -1
- `int256`取值范围：-(2 ** 255)到 2 ** 255 -1

`uint` 无符号整型

默认为`uint256`

不同位长的整形范围如下：

- `uint8`取值范围：0 到 2 ** 8 - 1
- `uint16`取值范围：0 到 2 ** 16 - 1
- ...
- `uintX`取值范围：0 到 2 ** `X` - 1
- `uint256`取值范围：0 到 2 ** 256 - 1

对于整形 X，可以使用 type(X).min 和 type(X).max 去获取这个类型的最小值与最大值。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestIntval {
  	int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int 等同于 int256
    // int 的最大最小值
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    uint8 public u8 = 1;
    uint256 public u256 = 456;
    uint public u = 123; // uint  等同于 uint256 
		// uint 的最大最小值
    uint public minUInt = type(uint).min;
    uint public maxUInt = type(uint).max;

    
    function mini() public pure returns(uint8){
        return type(uint8).max;
    }
}
```

## **address/地址**

默认值: 0x0000000000000000000000000000000000000000

20字节的16进制地址用来表示一个账户 或者合约地址

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestAddress {
    //与其他机器语言相区别的类型就是这个address 类型，160-bit/20byte
    address public myAddr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    //合约自己的地址
    address contractAddress = address(this);
    //跟普通的地址类型一样，但多了两个方法 transfer/send 这两个方法后面章节会讲到
    // address sender = payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
  	//可以使用 balance 属性来查询一个地址的余额
    function getBalance()
        public view
        returns (uint256, uint256)
    {
        require(myAddr.balance < contractAddress.balance, "1 must lg 2");
        return (myAddr.balance, contractAddress.balance);
    }
}
```

## **bytes/字节数组**

在计算机中的最小存储单位是 bit(位)

- 1byte等于8位
- Solidity中，byte可以赋值为

- - 16进制数字
  - 单引号的单个或多个字符

定长字节数组

bytes1 后面数字1是表示1字节 bytes默认等于bytes1
Bytes2 后面数字2是表示2字节
Bytes3 后面数字3是表示3字节
bytes4 后面数字4是表示4字节

...

bytes32 后面数字32是表示32字节

bytes32 等价于 int256或uint256 的位数

成员变量

`.length` 表示这个字节数组的长度（只读）



## **string/字符串**

1. 中文特殊字符需要用`unicode`编码
2. 通过concat 方法进行拼接
3. bytes 和 string之间转化
4. `string`字符串不能通过`length`方法获取其长度。
5. `keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2)) `可以通过这个方法比较两个字符串是否相等。
6. `abi.encodePacked(s1, s2)`:通过这个方法进行字符串合并拼接。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestAddress {
    string public str1 = "123";
    // 中文不适用unicode编码报错
    // string public str2 = ="你好";
    string public str2 = unicode"abc";
    function concat() public view returns(string memory) {
        string memory result = string.concat(str1,str2);
        return  result;
    }

    function caoncat2(string memory _a, string memory _b) public pure returns(string memory) {
        return string.concat(_a,_b);
    }
     function caoncat3(string memory _a, string memory _b) public pure returns(bytes memory) {
          bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        return bytes.concat(_ba,_bb);
    }
      function caoncat4(string memory _a, string memory _b) public pure returns(string memory) {
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        return string(bytes.concat(_ba,_bb));
    }
     // 比较s1和s2是否相等，相等返回true，不相等返回false
    function compareEqual(string memory s1, string memory s2)
        public
        pure
        returns (bool)
    {   
        // 不支持字符直接比较
        return s1 == s2;
        // return keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }

    // 将s1和s2合并为一个字节数组
    function mergeS1AndS2ReturnBytes(string memory s1, string memory s2)
        public
        pure
        returns (bytes memory)
    {
        return abi.encodePacked(s1, s2);
    }

    // 将s1和s2合并为一个字节数组转换为string
    function mergeS1AndS2ReturnString(string memory s1, string memory s2)
        public
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(s1, s2));
    }
}
```

##  Enum(枚举)

枚举将一个变量的取值限制为几个预定义值中的一个。精确使用枚举类型有助于减少代码中的bug。

```solidity
ontract UserState {
  // 枚举
  //默认值是列表中的第一个元素
  enum State { 
    Online,  	// 0
    Offline,	// 1
    Unknown		// 2
  } 

  State public status;
  function get() public view returns (State) {
      return status;
  }
  // 通过将uint传递到输入来更新状态
  function set(State _status) public {
      status = _status;
  }
  // 也可以是这样确定属性的更新
  function off() public {
      status = State.Offline;
  }
  // delete 将枚举重置为其第一个值 0
  function reset() public {
      delete status;
  }
}
```

## **array/数组**

> T[k]: 元素类型为T，固定长度为K的数组  uint[5] 
>
> T[]: 元素类型为T, 长度可以动态调整

### 一、固定长度的数组（Arrays）

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MappingTest {
    // 创建定长数组
    uint256[5] public arr = [1, 2, 3, 4, 5];

    // 定长数组求和
    function getAll() public view returns (uint256) {
        uint256 num = 0;
        for (uint256 i = 0; i < arr.length; i++) {
            num += arr[i];
        }
        return num;
    }

    function get() public view returns (uint256[5] memory) {
        return arr;
    }

    // 获取定长数组长度
    function getLenth() public view returns (uint256) {
        return arr.length;
    }

    // 修改长度失败
    function changeLenth() public {
        // arr.length = 7;
    }

    // 修改内部数据
    function change(uint256 _idx, uint256 _val) public {
        arr[_idx] = _val;
    }

    // push 修改
    // function change(uint256 _val) public {
    //     arr.push(_val);
    // }
}

```

### 二、可变长度的Arrays

`uint [] T = [1,2,3,4,5]`，这句代码表示声明了一个可变长度的`T`数组，因为我们给它初始化了`5`个无符号整数，所以它的长度默认为`5`。

`>=0.5.0`的版本中`length`方法只读，不可修改。 5版本之前支持length属性修改，缺失的以0补位

![image-20221214150932547](https://gitee.com/fcjun/image/raw/master/img/202212141509596.png)

```solidity
 uint [] T = [1,2,3,4,5];
```

### 三、二维数组 - 数组里面放数组

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract C {
    uint256[2][3] T = [[1, 2], [3, 4], [5, 6]];

    function T_len() public view returns (uint256) {
        return T.length; // uint256: 3
    }

     function getT() public view returns (uint256[2][3] memory) {
        return T;
    }    

    function change() public {
        T[1][0] = 55;
    }
}

```

`uint [2][3] T = [[1,2],[3,4],[5,6]]`这是一个三行两列的数组，你会发现和Java、C语言等的其它语言中二位数组里面的列和行之间的顺序刚好相反。在其它语言中，上面的内容应该是这么存储`uint [2][3] T = [[1,2,3],[4,5,6]]`。

上面的`数组T`是`storage`类型的数组，对于`storage`类型的数组，数组里面可以存放任意类型的值（比如：其它数组，结构体，字典／映射等等）。对于`memory`类型的数组，如果它是一个`public`类型的函数的参数，那么它里面的内容不能是一个`mapping(映射／字典)`，并且它必须是一个`ABI`类型。

###  四、数组字面量 Array Literals / 内联数组 Inline Arrays

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract C {
    
    function f() pure public {
        g([1, 2, 3]); 
        g([uint(1),2,3])
    }
    
    function g(uint[3] memory _data) pure public {
        // ...
    }
}
```



## 结构体 struct

> 通过基本数据类型来组合成自定义复杂的数据类型

语法结构:

```solidity
struct 关键字  结构体名称 {
	类型1  属性名1;
	类型2  属性名2；
	....
}
```

声明结构体

```solidity
struct Person {
	uint8 age;
	string id;
	string name;
}
```

创建结构变量

```solidity
结构体 变量名 = 结构体(属性1，属性2，...)
结构体 变量名 = 结构体({属性1：value1，属性2：value2Ï})

Person student1 = Person(18,1,"柯南")；
Person student2 = Person({age:17, id: 2, name: "迪迦Ï"})
```

修改结构体变量

```solidity
function setStudent(uint _age, string _name) public {
	student1.age = _age
	student1.name = _name
}
```

函数中返回结构体

```soli
function getStudent() public view returns(Person) {
	return student1
}
```

```solidity
contract Structs {
    struct Todo {
        string text;
        bool completed;
    }
    // 结构体数组
  
    Todo[] public todos;

    // 初始化结构的3种方法
    function create(string calldata _text) public {
        // 1.像函数一样调用它
        todos.push(Todo(_text, false));
        // 2. 键值对
        todos.push(Todo({text: _text, completed: false}));
        // 3.初始化一个空结构，然后更新它
        Todo memory todo;
        todo.text = _text;
        todos.push(todo);// completed 没有定义,默认为 false
    }
    //通过索引获取结构体数组中一个元素,并更新内部的属性
    function update(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
```



## 字典／映射（Mappings)

> 与数组和结构体一样，映射也是引用类型。
>
> 是一个一对一键值存储关系。
>
> 可以理解成js中的对象

```javascript
mapping(_KeyType => _ValueType)
```

- `_KeyType` – 可以是任何内置类型，或者bytes和字符串。不允许使用引用类型或复杂对象。
- `_ValueType` – 可以是任何类型。

**注意**

- 映射的数据位置(data location)只能是storage，通常用于状态变量。
- 映射可以标记为public，Solidity 自动为它创建getter。
- mapping 不能直接在函数返回

创建mapping 

```solidity

contract MappingTest {
    mapping(address => uint256) public balances;

    function update(uint256 _amount) public {
        balances[msg.sender] = _amount;
    }

    function getAmount() public view  returns(uint){
        return balances[msg.sender];
    }
}

```



```solidity
contract LedgerBalance {
   mapping(address => uint) public balances;

   function updateBalance(uint newBalance) public {
      balances[msg.sender] = newBalance;
   }
}
contract Updater {
   function updateBalance() public returns (uint) {
      LedgerBalance ledgerBalance = new LedgerBalance();
      ledgerBalance.updateBalance(10);
      return ledgerBalance.balances(address(this));
   }
}
```

```solidity

contract Mapping {
    //从地址到uint的映射
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        //映射始终返回一个值。
				//如果从未设置该值，它将返回默认值。
        return myMap[_addr];
    }
    // 更新此地址的值 	
    function set(address _addr, uint _i) public {
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
				//将值重置为默认值
        delete myMap[_addr];
    }
}
//嵌套 mapping
contract NestedMapping {
    //嵌套映射（从地址映射到另一个映射）
    mapping(address => mapping(uint => bool)) public nested;

    function get(address _addr1, uint _i) public view returns (bool) {
        // 可以从嵌套映射中获取值
        return nested[_addr1][_i];
    }

    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nested[_addr1][_i] = _boo;
    }

    // 删除 mapping 的一个元素
    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}

```



# Solidity运算符

### 算术

| 序号 | 运算符与描述                            |
| :--- | :-------------------------------------- |
| 1    | **+ (加)** 求和 **例:** A + B = 30      |
| 2    | **– (减)** 相减 **例:** A – B = -10     |
| 3    | *** (乘)** 相乘 **例:** A * B = 200     |
| 4    | **/ (除)** 相除 **例:** B / A = 2       |
| 5    | **% (取模)** 取模运算 **例:** B % A = 0 |
| 6    | **++ (递增)** 递增 **例:** A++ = 11     |
| 7    | **— (递减)** 递减 **例:** A– = 9        |

### 比较

| 序号 | 运算符与描述      |
| :--- | :---------------- |
| 1    | **== (等于)**     |
| 2    | **!= (不等于)**   |
| 3    | **> (大于)**      |
| 4    | **< (小于)**      |
| 5    | **>= (大于等于)** |
| 6    | **<= (小于等于)** |

### 逻辑

| 序号 | 运算符与描述                                                 |
| :--- | :----------------------------------------------------------- |
| 1    | **&& (逻辑与)** 如果两个操作数都非零，则条件为真。 **例:** (A && B) 为真 |
| 2    | **\|\| (逻辑或)** 如果这两个操作数中有一个非零，则条件为真。 **例:** (A \|\| B) 为真 |
| 3    | **! (逻辑非)** 反转操作数的逻辑状态。如果条件为真，则逻辑非操作将使其为假。 **例:** ! (A && B) 为假 |

### 位运算符

| 序号 | 运算符与描述                                                 |
| :--- | :----------------------------------------------------------- |
| 1    | **& (位与)** 对其整数参数的每个位执行位与操作。 **例:** (A & B) 为 2. |
| 2    | **\| (位或)** 对其整数参数的每个位执行位或操作。 **例:** (A \| B) 为 3. |
| 3    | **^ (位异或)** 对其整数参数的每个位执行位异或操作。 **例:** (A ^ B) 为 1. |
| 4    | **~ (位非)** 一元操作符，反转操作数中的所有位。 **例:** (~B) 为 -4. |
| 5    | **<< (左移位))** 将第一个操作数中的所有位向左移动，移动的位置数由第二个操作数指定，新的位由0填充。将一个值向左移动一个位置相当于乘以2，移动两个位置相当于乘以4，以此类推。 **例:** (A << 1) 为 4. |
| 6    | **>> (右移位)** 左操作数的值向右移动，移动位置数量由右操作数指定 **例:** (A >> 1) 为 1. |

### 赋值

solidity 支持的赋值运算符，如下表所示：

| 序号 | 运算符与描述                                                 |
| :--- | :----------------------------------------------------------- |
| 1    | **= (简单赋值)** 将右侧操作数的值赋给左侧操作数 **例:** C = A + B 表示 A + B 赋给 C |
| 2    | **+= (相加赋值)** 将右操作数添加到左操作数并将结果赋给左操作数。 **例:** C += A 等价于 C = C + A |
| 3    | **−= (相减赋值)** 从左操作数减去右操作数并将结果赋给左操作数。 **例:** C -= A 等价于 C = C – A |
| 4    | ***= (相乘赋值)** 将右操作数与左操作数相乘，并将结果赋给左操作数。 **例:** C *= A 等价于 C = C * A |
| 5    | **/= (相除赋值)** 将左操作数与右操作数分开，并将结果分配给左操作数。 **例:** C /= A 等价于 C = C / A |
| 6    | **%= (取模赋值)** 使用两个操作数取模，并将结果赋给左边的操作数。 **例:** C %= A 等价于 C = C % A |

> **注意** – 同样的逻辑也适用于位运算符，因此它们将变成`<<=`、`>>=`、`>>=`、`&=`、`|=`和`^=`。

### 条件运算符 

| 序号 | 运算符与描述                                           |
| :--- | :----------------------------------------------------- |
| 1    | **? : (条件运算符 )** 如果条件为真 ? 则取值X : 否则值Y |

# Solidity循环语句

## while

```solidity
while (表达式) {
   被执行语句(如果表示为真)
}
```

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract TestBool {
    uint256 public num = 10;

    function test(int max) public {
        int256 start = 1;
        while (start <= max) {
            start++;
            num++;
        }
    }
}

```



## do...while

Solidity 中， do…while循环的语法如下：

```solidity
do {
   被执行语句(如果表示为真)
} while (表达式);
注意: 不要漏掉do后面的分号。
```



```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract TestBool {
   uint public num  = 10;
   function test () public returns(uint) {
       int  start = 1;
       int  max = 10;
       do{
         start ++;
         num ++;
       }while(start <=max);
       return num;
   }
}
```



## for

```solidity
for (初始化; 测试条件; 迭代语句) {
   被执行语句(如果表示为真)
}
```



```so
contract TestBool {
    uint256 public num = 10;

    function test(int max) public {
     for(int256 start = 1; start<max; start ++) {
         num ++;
     }
    }
}

```



## break 与 continue

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract TestBool {
    uint256 public num = 10;

    function test(int max) public {
     for(int256 start = 1; start<max; start ++) {
         if(start == 1) {
            //  break;  // 跳出循环 num 10
            continue; // 跳出本次循环
        }
         num ++;
     }
    }
}

```



#  Solidity条件语句

Solidity支持条件语句，让程序可以根据条件执行不同的操作。条件语句包括：

- `if`
- `if...else`
- `if...else if`

![image-20221208161811890](https://gitee.com/fcjun/image/raw/master/img/image-20221208161811890.png)

# Solidity中的函数

## 函数修饰符

> 函数修饰符用于修改函数的行为。例如，向函数添加条件限制。
>
> 修饰符定义中出现特殊符号`_`的地方，用于插入函数体。如果在调用此函数时，满足了修饰符的条件，则执行该函数，否则将抛出异常。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    address owner;

    uint256 price = 10;

    constructor() {
        owner = msg.sender;
    }

    // 定义修饰符 onlyOwner 不带参数
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    // 使用修饰符 onlyOwner 限制只有发布者才能调用
    function changePrice(uint256 _price)
        public
        view
        onlyOwner
        returns (address, uint256)
    {
        return (owner, _price);
    }
}

```

## 视图函数（view）

> View(视图)函数 使用状态变量，但是不修改状态

如果函数中存在以下语句，则被视为修改状态，编译器将抛出警告。

- 修改状态变量。
- 触发事件。
- 创建合约。
- 使用`selfdestruct`。
- 发送以太。
- 调用任何不是视图函数或纯函数的函数
- 使用底层调用
- 使用包含某些操作码的内联程序集。

Getter方法是默认的视图函数。声明视图函数，可以在函数声明里，添加`view`关键字。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Test {
    function getResult() public view returns (uint256, uint256) {
        uint256 a = 1; // 局部变量
        uint256 b = 2;
        uint256 product = a * b;
        uint256 sum = a + b;
        return (product, sum);
    }
}

```

## 纯函数（Pure）

> Pure(纯)函数**不读取**或修改状态。
>
> 声明纯函数，可以在函数声明里，添加`pure`关键字。

如果函数中存在以下语句，则被视为读取状态，编译器将抛出警告

- 读取状态变量。
- 访问 `address(this).balance` 或 `<address>.balance`
- 访问任何区块、交易、msg等特殊变量(msg.sig 与 msg.data 允许读取)。
- 调用任何不是纯函数的函数。
- 使用包含特定操作码的内联程序集。

如果发生错误，纯函数可以使用`revert()`和`require()`函数来还原潜在的状态更改。

## 函数重载

> 同一个作用域内，相同函数名可以定义多个函数。这些函数的参数(参数类型或参数数量)必须不一样。仅仅是返回值不一样不被允许。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Test {
    function getSum(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function getSum(
        uint256 a,
        uint256 b,
        uint256 c
    ) public pure returns (uint256) {
        return a + b + c;
    }
}
```

## 加密函数

>Solidity 提供了常用的加密函数。以下是一些重要函数：
>
>- `keccak256(bytes memory) returns (bytes32)` 计算输入的Keccak-256散列。
>- `sha256(bytes memory) returns (bytes32)` 计算输入的SHA-256散列。
>- `ripemd160(bytes memory) returns (bytes20)` 计算输入的RIPEMD-160散列。
>- `ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)`从椭圆曲线签名中恢复与公钥相关的地址，或在出错时返回零。函数参数对应于签名的ECDSA值: r – 签名的前32字节; s: 签名的第二个32字节; v: 签名的最后一个字节。这个方法返回一个地址。

```solidity
contract Test {   
   function callKeccak256() public pure returns(bytes32 result){
      return keccak256("ABC");
   }  
}
```

# 智能合约

## 合约继承

>就像Java、C++中，类的继承一样，Solidity中，合约继承是扩展合约功能的一种方式。Solidity支持单继承和多继承。

Solidity中，合约继承的重要特点：

- 派生合约可以访问父合约的所有非私有成员，包括内部方法和状态变量。但是不允许使用`this`。
- 如果函数签名保持不变，则允许函数重写。如果输出参数不同，编译将失败。
- 可以使用`super`关键字或父合同名称调用父合同的函数。
- 在多重继承的情况下，使用`super`的父合约函数调用，优先选择被最多继承的合约。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Base {
    uint256 private data;
    uint256 public info;

    constructor() {
        info = 10;
    }

    function increment(uint256 a) private pure returns (uint256) {
        return a + 1;
    }

    function updateData(uint256 a) public {
        data = a;
    }

    function getData() public view returns (uint256) {
        return data;
    }

    function compute(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }
}

contract Test is Base {
    uint256 private result;
    Base private base;

    constructor() {
        base = new Base();
    }

    function getComputedResult() public {
        result = compute(3, 5);
    }

    function getResult() public view returns (uint256) {
        return result;
    }

}
```



## 构造函数 

> 构造函数是使用`construct`关键字声明的特殊函数，用于初始化合约的状态变量。合约中构造函数是可选的，可以省略。

构造函数有以下重要特性：

- 一个合约只能有一个构造函数。
- 构造函数在创建合约时执行一次，用于初始化合约状态。
- 在执行构造函数之后，合约最终代码被部署到区块链。合约最终代码包括公共函数和可通过公共函数访问的代码。构造函数代码或仅由构造函数使用的任何内部方法不包括在最终代码中。
- 构造函数可以是公共的，也可以是内部的。
- 内部构造函数将合约标记为抽象合约。
- 如果没有定义构造函数，则使用默认构造函数。
