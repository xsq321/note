export default function request(params){
	wx.showLoading({
		title: '加载中...',
	})
	return new Promise((resolve,reject)=>{
		wx.request({
			...params,
			url:'http://localhost:5000'+params.url,
			success(res){
				resolve(res.data)
			},
			fail(err){
				reject(err)
			},
			// 不管请求成功或失败都会在请求完成后运行
			complete(){
				wx.hideLoading()
			}
		})
	})
}