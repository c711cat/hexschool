var farms = [
  {
    farmer: '卡斯柏',
    dogs: ['張姆士', '龐德']
  },
  {
    farmer: '查理',
    dogs: ['皮皮']
  }
]
//innerHTML寫法
var farmersNameEl = document.querySelector('.farmersName')
var farmsLen = farms.length
var str = ''
var i

for (i = 0; i < farmsLen; i++) {
  var list = '<li>' + farms[i].farmer + '</li>'
  str += list
}
farmersNameEl.innerHTML = str


//appendChild寫法
var farmersNameListEl = document.querySelector('.farmersNameList')
var i
for (i = 0; i < farmsLen; i++) {
  var newEl = document.createElement('li')
  newEl.textContent = farms[i].farmer
  farmersNameListEl.appendChild(newEl)
}
