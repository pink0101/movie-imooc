// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 导入request-promise 来进行云函数的请求发送
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (e, context) => {
  return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${e.start}&count=${e.count}`)
  .then(res=>{
    return res
    console.log(res)
  })
}