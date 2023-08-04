<template>
  <div>
    <h1>千锋去中心投票系统</h1>
    主持人: {{ chairperson }}<br />
    <button v-if="chairperson === account" @click="giveRightToVote">
      分发选票
    </button>
    <hr />
    当前账户:{{ account }}<br />
    权重:{{ voteInfo.weight }}<br />
    委托账户:{{ voteInfo.delegate }}<br />
    是否已投票:{{ voteInfo.voted }}<br />
    投票id:{{ voteInfo.vote }}<br />
    <hr />
    <div class="votolist">
      <div
        class="votolist-item"
        v-for="(item, index) in proposals"
        :key="index"
      >
        <div>
          {{ item.name }}
        </div>
        <div>
          {{ item.voteCount }}
        </div>
        <div>
          <button @click="vote(index)">投票</button>
          <button @click="delegate">委托投票</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Web3 = require("web3");
// 合约地址 0xD68848E9DCbE305F4ff782d3194292Bcb1Bd6D41
// 0x61C682E657c44021279DaE8a7652336ddD0b5d2e
import Ballot from "./contracts/contract_Ballot.json";
console.log(Ballot.abi);
var web3 = new Web3(Web3.givenProvider || geerliWS);
const geerliWS =
  "wss://goerli.infura.io/ws/v3/e4f789009c9245eeaad1d93ce9d059bb";
export default {
  data() {
    return {
      account: "",
      proposals: [],
      voteInfo: {},
      chairperson: "",
    };
  },
  methods: {
    delegate() {
      const address = prompt('请输入委托人的地址')
      this.Ballot.methods.delegate(address)
      .send({from:this.account})
      .on("receipt",(event) => {
        alert("委托成功");
        console.log(event)
        this.getVoteInfo();
      })
    },
    // 投票
    async vote(index) {
      const res = await this.Ballot.methods.vote(index).send({from: this.account});
      console.log(res);
    },
    // 分发选票
    async giveRightToVote() {
      const str = prompt("请输入选民地址用，分开");
      const arr = str.split(",");
      console.log(arr);
      this.Ballot.methods
        .giveRightToVote(arr)
        .send({ from: this.account })
        .on("receipt", (event) => {
          alert("选票分发成功");
          console.log(event);
          // 根据需求做一些页面刷新的处理
        });
    },
    // 获取主持人地址
    async getChairperson() {
      this.chairperson = await this.Ballot.methods.chairperson().call();
    },
    // 获取投票主题信息
    async getProposalsData() {
      const proposals = await this.Ballot.methods.getProposals().call();
      this.proposals = proposals;
    },
    // 根据地址获取个人投票者信息
    async getVoteInfo() {
      this.voteInfo = await this.Ballot.methods.voters(this.account).call();
    },
    // 事件监听
    initEventListen() {
      this.Ballot.events
        .voteSuccess({ fromBlock: 0 }, (err, event) => {
          console.log("监听执行");
          console.log(event);
        })
        .on("data", (event) => {
          console.log("智能合约触发事件", event);
          this.getProposalsData();
          this.getVoteInfo();
        });
    },
  },
  async created() {
    // 获取metamask钱包的账户信息
    const accounts = await web3.eth.requestAccounts();
    this.account = accounts[0];
    // 创建智能合约实例
    this.Ballot = new web3.eth.Contract(
      Ballot.abi,
      "0xD68848E9DCbE305F4ff782d3194292Bcb1Bd6D41"
    );
    this.initEventListen();
    this.getProposalsData();
    this.getVoteInfo();
    this.getChairperson();
  },
};
</script>
<style>
.votolist {
  display: flex;
}
.votolist-item {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
