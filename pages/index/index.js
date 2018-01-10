//index.js

// Page({
//   data: {
//     motto: 'Hello World',
    
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
    
//   },
  
// })

Page({
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})