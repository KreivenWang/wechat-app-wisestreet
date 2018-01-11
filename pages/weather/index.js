//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //加载状态
    loadingHidden: false,
    //当前温度
    currentTemperature: '',
    //夜间温度
    nightAirTemperature: '',
    //白天温度
    dayAirTemperature: '',
    //当前天气
    weather: '',
    //污染指数
    aqi: '',
    //污染程度
    quality: '',
    //风力
    windPower: '',
    //风向
    windDirection: '',
    //因为数据返回不是数组所以要自己封装一个数组
    list: [],
    height: 663,

    latitude:0,
    longitude:0
  },

  onLoad: function () {
    var that = this

    //100%好像不好使 可以获取设备高度
    wx.getSystemInfo({
      success: function (res) {
        that.data.height = res.windowHeight;
      }
    })

    wx.getLocation({
      success: function (loc) {
        //通过经纬度请求数据
        // wx.request({
        //   //这个网站有免费API赶紧收藏
        //   url: 'https://route.showapi.com/9-5',
        //   data: {
        //     showapi_appid: '54061',
        //     showapi_sign: '42a797328f4b4deebd5e6e066dabe594',
        //     //
        //     from: '5',
        //     lng: res.longitude,
        //     lat: res.latitude,
        //     //获取一周情况 0是不获取
        //     needMoreDay: '1',
        //     needIndex: '1'
        //   },
        //   success: function (res) {
        //     console.log(res)
        //     console.log(res.data.showapi_res_body.now.api)
        //     that.setData({
        //       //改变加载状态
        //       loadingHidden: true,

        //       currentTemperature: res.data.showapi_res_body.now.temperature,
        //       nightAirTemperature: res.data.showapi_res_body.f1.night_air_temperature,
        //       dayAirTemperature: res.data.showapi_res_body.f1.day_air_temperature,
        //       weather: res.data.showapi_res_body.now.weather,
        //       aqi: res.data.showapi_res_body.now.aqi,
        //       quality: res.data.showapi_res_body.now.aqiDetail.quality,
        //       windPower: res.data.showapi_res_body.now.wind_power,
        //       windDirection: res.data.showapi_res_body.now.wind_direction,
        //       //拼接数组
        //       list: [
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f1.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f1.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f1.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f1.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f2.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f2.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f2.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f2.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f3.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f3.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f3.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f3.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f4.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f4.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f4.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f4.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f5.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f5.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f5.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f5.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f6.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f6.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f6.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f6.night_air_temperature
        //         },
        //         {
        //           'day_weather_pic': res.data.showapi_res_body.f7.day_weather_pic,
        //           'weekday': res.data.showapi_res_body.f7.weekday,
        //           'day_air_temperature': res.data.showapi_res_body.f7.day_air_temperature,
        //           'night_air_temperature': res.data.showapi_res_body.f7.night_air_temperature
        //         }

        //       ]
        //     })
        //   }
        // })


        let res ={
          data: 
          {
            "showapi_res_error": "",
            "showapi_res_code": 0,
            "showapi_res_body": {
              "f6": {
                "night_weather_code": "07",
                "day_weather": "小雨",
                "night_weather": "小雨",
                "air_press": "1031 hPa",
                "jiangshui": "89%",
                "night_wind_power": "3-4级 5.5~7.9m/s",
                "day_wind_power": "0-3级 <5.4m/s",
                "day_weather_code": "07",
                "sun_begin_end": "06:53|17:14",
                "ziwaixian": "弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/07.png",
                "night_air_temperature": "6",
                "weekday": 2,
                "day_air_temperature": "12",
                "day_wind_direction": "东北风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/07.png",
                "day": "20180116",
                "night_wind_direction": "西北风"
              },
              "f7": {
                "night_weather_code": "01",
                "day_weather": "晴",
                "night_weather": "多云",
                "air_press": "1031 hPa",
                "jiangshui": "19%",
                "night_wind_power": "0-3级 <5.4m/s",
                "day_wind_power": "0-3级 <5.4m/s",
                "day_weather_code": "00",
                "sun_begin_end": "06:53|17:15",
                "ziwaixian": "最弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
                "night_air_temperature": "6",
                "weekday": 3,
                "day_air_temperature": "9",
                "day_wind_direction": "东北风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/01.png",
                "day": "20180117",
                "night_wind_direction": "南风"
              },
              "ret_code": 0,
              "time": "20180111180000",
              "now": {
                "aqiDetail": {
                  "num": "249",
                  "co": "0.84",
                  "so2": "20",
                  "area": "上海",
                  "o3": "32",
                  "no2": "70",
                  "aqi": "75",
                  "quality": "良好",
                  "pm10": "82",
                  "pm2_5": "54",
                  "o3_8h": "51",
                  "primary_pollutant": "颗粒物(PM2.5)"
                },
                "weather_code": "01",
                "temperature_time": "21:30",
                "wind_direction": "东风",
                "wind_power": "1级",
                "sd": "52%",
                "aqi": "75",
                "weather": "多云",
                "weather_pic": "http://app1.showapi.com/weather/icon/night/01.png",
                "temperature": "1"
              },
              "cityInfo": {
                "c6": "shanghai",
                "c5": "黄浦",
                "c4": "huangpu",
                "c3": "黄浦",
                "c9": "中国",
                "c8": "china",
                "c7": "上海",
                "c17": "+8",
                "c16": "AZ9210",
                "c1": "101020400",
                "c2": "huangpu",
                "c11": "021",
                "longitude": 121.48,
                "c10": "3",
                "latitude": 31.233,
                "c12": "200000",
                "c15": "15"
              },
              "f1": {
                "night_weather_code": "00",
                "day_weather": "晴",
                "night_weather": "晴",
                "air_press": "1031 hPa",
                "jiangshui": "0%",
                "night_wind_power": "4-5级 8.0~10.7m/s",
                "day_wind_power": "4-5级 8.0~10.7m/s",
                "day_weather_code": "00",
                "sun_begin_end": "06:54|17:10",
                "ziwaixian": "弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
                "night_air_temperature": "-2",
                "weekday": 4,
                "day_air_temperature": "5",
                "day_wind_direction": "西北风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
                "day": "20180111",
                "night_wind_direction": "西北风"
              },
              "f3": {
                "night_weather_code": "01",
                "day_weather": "晴",
                "night_weather": "多云",
                "air_press": "1031 hPa",
                "jiangshui": "3%",
                "night_wind_power": "3-4级 5.5~7.9m/s",
                "day_wind_power": "0-3级 <5.4m/s",
                "day_weather_code": "00",
                "sun_begin_end": "06:54|17:12",
                "ziwaixian": "最弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
                "night_air_temperature": "0",
                "weekday": 6,
                "day_air_temperature": "7",
                "day_wind_direction": "东南风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/01.png",
                "day": "20180113",
                "night_wind_direction": "东南风"
              },
              "f2": {
                "night_weather_code": "00",
                "day_weather": "晴",
                "night_weather": "晴",
                "air_press": "1031 hPa",
                "jiangshui": "0%",
                "night_wind_power": "3-4级 5.5~7.9m/s",
                "day_wind_power": "3-4级 5.5~7.9m/s",
                "day_weather_code": "00",
                "sun_begin_end": "06:54|17:11",
                "ziwaixian": "中等",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
                "night_air_temperature": "-2",
                "weekday": 5,
                "day_air_temperature": "4",
                "day_wind_direction": "西北风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
                "day": "20180112",
                "night_wind_direction": "无持继风向风"
              },
              "f5": {
                "night_weather_code": "07",
                "day_weather": "多云",
                "night_weather": "小雨",
                "air_press": "1031 hPa",
                "jiangshui": "80%",
                "night_wind_power": "0-3级 <5.4m/s",
                "day_wind_power": "3-4级 5.5~7.9m/s",
                "day_weather_code": "01",
                "sun_begin_end": "06:54|17:14",
                "ziwaixian": "最弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/01.png",
                "night_air_temperature": "7",
                "weekday": 1,
                "day_air_temperature": "14",
                "day_wind_direction": "东南风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/07.png",
                "day": "20180115",
                "night_wind_direction": "西风"
              },
              "f4": {
                "night_weather_code": "00",
                "day_weather": "多云",
                "night_weather": "晴",
                "air_press": "1031 hPa",
                "jiangshui": "0%",
                "night_wind_power": "0-3级 <5.4m/s",
                "day_wind_power": "3-4级 5.5~7.9m/s",
                "day_weather_code": "01",
                "sun_begin_end": "06:54|17:13",
                "ziwaixian": "弱",
                "day_weather_pic": "http://app1.showapi.com/weather/icon/day/01.png",
                "night_air_temperature": "6",
                "weekday": 7,
                "day_air_temperature": "13",
                "day_wind_direction": "东南风",
                "night_weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
                "day": "20180114",
                "night_wind_direction": "东北风"
              }
            }
          }
        };

        that.setData({
          latitude : loc.latitude,
          longitude: loc.longitude,

          //改变加载状态
          loadingHidden: true,

          currentTemperature: res.data.showapi_res_body.now.temperature,
          nightAirTemperature: res.data.showapi_res_body.f1.night_air_temperature,
          dayAirTemperature: res.data.showapi_res_body.f1.day_air_temperature,
          weather: res.data.showapi_res_body.now.weather,
          aqi: res.data.showapi_res_body.now.aqi,
          quality: res.data.showapi_res_body.now.aqiDetail.quality,
          windPower: res.data.showapi_res_body.now.wind_power,
          windDirection: res.data.showapi_res_body.now.wind_direction,
          //拼接数组
          list: [
            {
              'day_weather_pic': res.data.showapi_res_body.f1.day_weather_pic,
              'weekday': res.data.showapi_res_body.f1.weekday,
              'day_air_temperature': res.data.showapi_res_body.f1.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f1.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f2.day_weather_pic,
              'weekday': res.data.showapi_res_body.f2.weekday,
              'day_air_temperature': res.data.showapi_res_body.f2.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f2.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f3.day_weather_pic,
              'weekday': res.data.showapi_res_body.f3.weekday,
              'day_air_temperature': res.data.showapi_res_body.f3.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f3.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f4.day_weather_pic,
              'weekday': res.data.showapi_res_body.f4.weekday,
              'day_air_temperature': res.data.showapi_res_body.f4.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f4.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f5.day_weather_pic,
              'weekday': res.data.showapi_res_body.f5.weekday,
              'day_air_temperature': res.data.showapi_res_body.f5.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f5.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f6.day_weather_pic,
              'weekday': res.data.showapi_res_body.f6.weekday,
              'day_air_temperature': res.data.showapi_res_body.f6.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f6.night_air_temperature
            },
            {
              'day_weather_pic': res.data.showapi_res_body.f7.day_weather_pic,
              'weekday': res.data.showapi_res_body.f7.weekday,
              'day_air_temperature': res.data.showapi_res_body.f7.day_air_temperature,
              'night_air_temperature': res.data.showapi_res_body.f7.night_air_temperature
            }
          ]
        });
console.log(loc);
        
      }
    })

  }
})
