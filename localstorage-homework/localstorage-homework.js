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
//用ul綁定監聽，點按鈕後，觸發從localStorage的中取出資料呈現到網頁上

//(3)deleList + addEventListener

btn.addEventListener('click', addList, false)
ul.addEventListener('click', updateList, false)
updateList(data)

function addList (e) {
  e.preventDefault() //不知道要寫這個的用意?
  var text = document.querySelector('.text').value
  var todo = { content: text }
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
  list.innerHTML = str
}

function deleList (e) {
  e.preventDefault() //不知為何寫這個?
  if (e.target.nodeName !== 'A') {
    return
  }
  var index = e.target.dataset.index
  data.splice(index, 1)
  localStorage.setItem('toDoList', JSON.stringify(data))
  updateList(data)
}
