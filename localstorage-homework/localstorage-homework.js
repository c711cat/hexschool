//第6次寫
//輸入代辦事項->按下按鈕->"刪除"的連結+代辦事項出現在網頁上->按下刪除的連結->該代辦事項被刪除
//1.按下按鈕後，代辦事項會出現在網頁上
//綁定按鈕+監聽-觸發按下事件去執行函式
//綁定輸入的文字class
//設定一個空陣列或已經存取的代辦事項的陣列
//輸入的值必須是陣列包含物件的形式
//將輸入的值(陣列)存入LS中

//取出輸入的值
//再將LS中的值parse到網頁上

//2.重新整理的函式
//按下新增代辦事項按鈕後回執行一次
//網頁重整時會執行一次
//刪除代辦事項時會執行一次

//3.按下代辦事項前面的刪除連結，可以刪除該代辦事項
//綁定UL，按下刪除連結時，觸發刪除代辦事項的函式
//讓代辦事項以LI的形式接在UL下方

var btn = document.querySelector('.btn')
var data = []

btn.addEventListener('click', addList, false)
function addList (e) {
  e.preventDefault()
  var text = document.querySelector('.text').value
  var object = { content: text }
  data.push(object)
  localStorage.setItem('todolist', JSON.stringify(data))
}
