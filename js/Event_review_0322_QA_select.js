//使用網頁選單時，可隨選擇到的區域，以li的形式顯示出該區域的農夫名字
var farms = [
  {
    farmer: '卡斯柏',
    country: '前鎮區'
  },
  {
    farmer: '查理',
    country: '前鎮區'
  },
  {
    farmer: '捷克',
    country: '苓雅區'
  }
]

var areaEl = document.querySelector('.area')
var i
var farmsLen = farms.length
var listEl = document.querySelector('.list')
areaEl.addEventListener(
  'change',
  function (e) {
    for (i = 0; i < farmsLen; i++) {
      var newEl = document.createElement('li')
      if (farms[i].country == '前鎮區') {
        console.log(farms[i].farmer)
      }
    }
  },
  false
)
