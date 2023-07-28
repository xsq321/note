import request from "../../utils/request"

// pages/home/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userList:[]
	},

	handlePost(){
		request({
			url:'/users',
			method:'post',
			data:{
				username:'ww',
				password:'333'
			}
		}).then(res=>{
			this.handleGet()
		})
	},
	handleGet(){
		request({
			url:'/users',
		}).then(res=>{
			this.setData({
				userList:res
			})
		})
	},
	handleTap(){
		console.log('1');
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		console.log(options);
		this.handleGet()
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
		console.log('到底了');
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})