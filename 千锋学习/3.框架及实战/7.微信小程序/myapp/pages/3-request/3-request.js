// pages/3-request/3-request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleRequest(){
    wx.request({
      url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%90%88%E8%82%A5&ci=56&channelId=4',
      method:'get',
      success:(res)=>{
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})