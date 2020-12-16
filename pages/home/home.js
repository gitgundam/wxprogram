// pages/home/home.js

import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
const types = ['pop', 'new', 'sell']
Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    isShow: false,
    isTabFixed: false
  },
  handleTabClick(event) {
    const index = event.detail.index
    this.setData({
      currentType: types[index]
    })

  },
  //当页面加载完成时
  onLoad: function (options) {
    this._getMultiData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')

  },
  //获取轮播图数据
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      //将banners和recommends放入data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  //获取商品数据
  _getGoodsData(type) {
    //页面加载的时候获取页码
    const page = this.data.goods[type].page + 1
    //发送网络请求
    getGoodsData(type, page).then(res => {
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
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
    console.log(1);
    this._getGoodsData(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onPageScroll(options){
    const scrollTop = options.scrollTop
    const flag = scrollTop >= 800
    if( flag !=this.data.isShow){
      this.setData({
        isShow: scrollTop > 800 
      })
    }
    const flag2 = scrollTop >= 578
    if( flag2 !=this.data.isTabFixed){
      this.setData({
        isTabFixed: scrollTop > 588
      })
    }
    
  }

})