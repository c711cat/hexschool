var btn_el = document.querySelector('.btn')
//選擇事件，代入匿名function,false
//監聽語法 : 監聽裡面的click有沒有去做function裡面的事情
btn_el.addEventListener(
  'click',
  function (e) {
    alert('hello')
  },
  false
)
//onclick 與 addEventListener差別
//onclick不能同時綁定兩個事件
//使用onclick寫法，連續綁定兩個東西時，
//只會顯示最後一筆，之前的onclick會被清除，靈活性低，所以有新的語法-addEventListener。
var btnOn_el = document.querySelector('.btnOn')
btnOn_el.onclick = function () {
  alert('on-1')
}
btnOn_el.onclick = function () {
  alert('on-2')
}

//addEventListener寫法:
var btnAdd_el = document.querySelector('.btnAdd')
btnAdd_el.addEventListener(
  'click',
  function () {
    alert('addon-1')
  },
  false
)
btnAdd_el.addEventListener(
  'click',
  function () {
    alert('addon-2')
  },
  false
)

var box_el = document.querySelector('.box')
box_el.addEventListener(
  'click',
  function (e) {
    e.stopPropagation() //加上這一行，停止往下去找，只會找第一層就停止了的語法(終止冒泡事件)
    alert('box')
    console.log('box')
  },
  false
)

var body_el = document.querySelector('.body')
body_el.addEventListener(
  'click',
  function () {
    alert('body')
    console.log('body')
  },
  false
)
//false (事件氣泡 - event Bubbling) - 從指定元素往外找 - 先顯示box，再顯示body，第三個參數若不寫時，預設是false
//true (事件捕捉 - event Capturing) = 從最外層找到指定元素- 先顯示body，再顯示box

var link_el = document.querySelector('.link')
link_el.addEventListener('click', function (e) {
  //取消元素默認行為 ↓
  //原本點連結會跳轉到指定網頁
  //submit 按鈕，先透過我的JS去查詢表單有無錯誤，POST去傳送
  e.preventDefault()
  console.log('test')
})

var header_el = document.querySelector('.header')
header_el.addEventListener(
  'click',
  function (e) {
    // console.log(e) → 可以從網頁的console去看到點擊的詳細內容:滑鼠點擊的座標、及event的object(target:li)
    // console.log(e.target) → 看到點到的內容，例如: <li><a href="#">123</a></li> 或 <a href="#">123</a>
    console.log(e.target.nodeName) //→ 看到點到的標籤名稱，例如:UL、LI、A
  },
  false
)
