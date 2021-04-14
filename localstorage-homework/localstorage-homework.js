//1. 綁定DOM元素UL、btn、準備可以存進資料的陣列或空陣列

//為什麼要綁定?
//UL:為了監聽指定a連結-刪除被點擊後可以觸發刪除LI的代辦事項
//btn:為了監聽按下按鈕時可以觸發點擊事件去執行存資料進去localStorage中，
//及代辦事項以list形式顯示在網頁上
//data:為了預備儲存的資料庫轉成陣列或空陣列:為了輸入的代辦事項可以陣列方式儲存進去，
//方便後續取用在網頁上呈現

//2. 三個function
//(1)addList + addEventListener
//用btn綁定監聽，點按鈕去觸發增加代辦事項進去localStorage中

//(2)updateList 預設每次都先更新資料庫
//不須綁定，只要寫一個function放在對的位置去執行即可

//(3)deleList + addEventListener
//綁定ul，監聽ul中的刪除連結被點擊後，去執行刪除代辦事項的動作

var btn = document.querySelector('.btn')
var ul = document.querySelector('.list')
var data = JSON.parse(localStorage.getItem('toDoList')) || []

btn.addEventListener('click', addList, false)
ul.addEventListener('click', deleList, false)
updateList(data) //預設每次都更新一次

function addList (e) {
  e.preventDefault()
  var text = document.querySelector('.text').value
  var todo = { content: text }
  data.push(todo)
  var textStr = JSON.stringify(data)
  updateList(data)
  localStorage.setItem('toDoList', textStr)
}

function updateList (items) {
  //不懂洧杰這裡(data)為什麼要用items ?
  var str = ''
  var len = items.length
  var i
  for (i = 0; i < len; i++) {
    str +=
      '<li ><a href="#" data-num=' +
      i +
      '>刪除</a> <span>' +
      items[i].content +
      '</span></li>'
  }
  ul.innerHTML = str
}

function deleList (e) {
  e.preventDefault()

  if (e.target.nodeName !== 'A') {
    return
  }
  var num = e.target.dataset.num
  data.splice(num, 1)
  localStorage.setItem('toDoList', JSON.stringify(data))
  updateList(data)
}
