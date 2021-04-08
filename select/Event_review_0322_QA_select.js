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
// var areaEl = document.querySelector('.area')
// var farmsLen = farms.length
// var i
// var listEl = document.querySelector('.list')
// areaEl.addEventListener(
//   'change',
//   function changeSelect (e) {
//     var str = '' //必須在function裡面
//     var select = e.target.value //必須在function裡面
//     for (i = 0; i < farmsLen; i++) {
//       if (select == farms[i].country) {
//         str += '<li>' + farms[i].farmer + '</li>'
//         console.log(str)
//       }
//     }
//     listEl.innerHTML = str
//   },
//   false
// )

//一直累加不停...
var areaEl = document.querySelector('.area')
var farmsLen = farms.length
var i

function changeSelect (e) {
  var select = e.target.value
  var listEl = document.querySelector('.list')
  listEl.textContent = '' //從空字串開始串聯
  for (i = 0; i < farmsLen; i++) {
    if (select == farms[i].country) {
      var newEl = document.createElement('li')
      newEl.textContent = farms[i].farmer
      console.log(farms[i].farmer)
      listEl.appendChild(newEl)
    }
  }
}

areaEl.addEventListener('change', changeSelect, false)
