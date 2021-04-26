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

btn.addEventListener('click', addList, false)
function addList (e) {
  e.preventdefault()
  var text = document.querySelector('.text').value
  data.push(text)
  JSON.stringify(localStorage.setItem('todolist', data))
}
