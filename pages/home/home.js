// pages/home/home.js

import {getMultidata} from '../../service/home.js'
Page({
  data: {
    banners:[],
    recommends: [],
    titles:['流行','新款','精选']
  },
  handleTabClick(event){
    console.log(event.detail.index);
  },
  onLoad: function (options) {
    getMultidata().then(res => {
      const data = res.data.data
      const banners = data.banner.list
      const recommends = data.recommend.list
      this.setData(
        {
          banners,
          recommends
        }
      )
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})