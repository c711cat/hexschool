//1. 綁定DOM元素UL、btn、準備可以存進資料的陣列或空陣列

//為什麼要綁定?
//UL:為了指定後續的LI加在UL下方
//btn:為了監聽按下按鈕時可以觸發點擊事件去執行存資料進去localStorage中，
//及以list形式顯示在網頁上
//預備儲存的資料庫轉成陣列或空陣列:為了輸入的代辦事項可以陣列方式儲存進去，
//方便後續取用在網頁上呈現

var btn = document.querySelector('.btn')
var ul = document.querySelector('.list')
var data = JSON.parse(localStorage.getItem('toDoList')) || []

//2. 三個function
//(1)addList + addEventListener
//用btn綁定監聽，點按鈕去觸發增加代辦事項進去localStorage中

//(2)updateList
//不須綁定，只要寫一個function放在對的位置去執行即可

//(3)deleList + addEventListener
//綁定ul，監聽ul中的刪除連結被點擊後，去執行刪除代辦事項的動作

btn.addEventListener('click', addList, false)
ul.addEventListener('click', deleList, false)
updateList(data)

function addList (e) {
  e.preventDefault() //不寫此行會有送出的預設行為
  var text = document.querySelector('.text').value
  var todo = { content: text }
  console.log(data)
  data.push(todo)
  updateList(data)
  localStorage.setItem('toDoList', JSON.stringify(data))
}

function updateList (items) {
  str = ''
  var len = items.length
  var i
  for (i = 0; i < len; i++) {
    str +=
      '<li><a href="#" data-index=' +
      i +
      '>刪除</a><span>' +
      items[i].content +
      '</span></li>'
  }
  ul.innerHTML = str
}

function deleList (e) {
  e.preventDefault() //不寫此行會有跳轉頁面行為
  if (e.target.nodeName !== 'A') {
    return
  }
  var index = e.target.dataset.index
  data.splice(index, 1)
  localStorage.setItem('toDoList', JSON.stringify(data))
  updateList(data)
}
