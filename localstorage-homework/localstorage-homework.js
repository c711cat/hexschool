//第四次寫
//1.讓輸入的代辦事項存入LS中
//綁定btn按鈕，讓點擊按鈕時觸發事件，去存入代辦事項到LS中:function addList
//將代辦事項陣列化-需要有一個空陣列及可能已經有代辦事項的陣列，可進行新增及刪除

//2.讓LS中的代辦事項轉出顯示在網頁上及自動更新網頁上的代辦事項:function updateList
//以呼叫function的方式執行，放在開頭、新增及刪除位置
//以組字串方式+innerHTML呈現

//3.刪除代辦事項可連同LS中一起刪除，並重整一次網頁上的代辦事項:function deleList
//綁定UL，若點擊到UL的範圍時，可以觸發刪除事件

var btn = document.querySelector('.btn')
var data = JSON.parse(localStorage.getItem('todolist')) || []
var ul = document.querySelector('.list')
updateList()

btn.addEventListener('click', addList, false)
function addList (e) {
  e.preventDefault()
  var text = document.querySelector('.text').value
  var object = { content: text }
  data.push(object)
  localStorage.setItem('todolist', JSON.stringify(data))
  updateList()
}

function updateList () {
  var i
  var str = ''
  for (i = 0; i < data.length; i++) {
    str +=
      '<li><a data-num=' +
      i +
      ' href="#">' +
      '刪除' +
      '</a><span>' +
      data[i].content +
      '</span></li>'
  }
  ul.innerHTML = str
}

ul.addEventListener('click', deleList, false)
function deleList (e) {
  e.preventDefault()
  if (e.target.nodeName == 'A') {
    var number = e.target.dataset.num
    data.splice(number, 1)
    localStorage.setItem('todolist', JSON.stringify(data))
  }
  updateList()
}
