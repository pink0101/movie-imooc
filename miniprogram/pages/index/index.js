// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  },

  // 获取电影列表数据函数
  getMovieList: function() {
    wx: wx.showLoading({ // 提示用户正在加载中
      title: '加载中',
    })
    wx.cloud.callFunction({ // 调用云函数获取电影列表数据
      name: "movie-list",
      data: {
        start: this.data.movieList.length, //传值
        count: 10
      }
    }).then(res => {
      console.log(res)
      this.setData({ // 对data中的 movieList 进行赋值
        movieList: this.data.movieList.concat(JSON.parse(res.result).subjects),
      })
      //加载成功后，隐藏正在加载
      wx.hideLoading()
    })
  },

  // 点击评价按钮
  gotoComment:function(e){
    wx.navigateTo({ // 跳转一个页面
      url: `../comment/comment?moveid=${e.target.dataset.movieid}`,
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMovieList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.getMovieList(); // 再次获取数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})