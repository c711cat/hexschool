//第三次寫
//1.讓輸入的代辦事項存入localStorage中
//綁定HTML的按鈕
//監聽點了btn後觸發function addList 去新增代辦事項
//防止按下按鈕的預設行為
//必須先取得輸入代辦事項文字的值
//將輸入的文字的值轉為字串 stringify
//轉為字串的值再存入LS中
//LS必須先有一個空陣列
//讓輸入的文字可以物件形式存入


//2.讓localStorage的代辦事項可以呈現在網頁上，
//呈現的樣子: 一個A連結"刪除" 後面加上代辦事項文字

//單獨一個function updateList
//使用方法:以呼叫function去執行
//先有一個空字串
//再跑for loop，讓空字串自行加總組裝代辦事項後呈現在網頁上
//3.為了讓每次重新整理網頁時、新增及刪除代辦事項時，都會自動更新一次代辦事項內容

//4.按下A連結的刪除時，可以同時刪除網頁上及localStorage的代辦事項
//綁定UL去監聽按了連結的刪除後，觸發刪除的行為
//停止按下連結後預設行為
//確定滑鼠按到的是否為A連結
//若不是A連結則停止後續刪除行為
//若是A連結則執行後續刪除行為:
//按了A連結可以刪除該代辦項目-data-num
//所以在寫顯示在網頁上的代辦事項也要有data-num=i
//重新更新一次LS及更新一次網頁上的畫面

var btn = document.querySelector('.btn')
var data = []
btn.addEventListener('click', addList, false)
function addList (e) {
  e.preventDefault()
  var text = document.querySelector('.text').value
  var object = { content: text }
  var textStr = JSON.stringify(object)
  localStorage.setItem('toDoList', textStr)
}
