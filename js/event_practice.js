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
  function () {
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
//false - 從指定元素往外找
//true = 從最外層找到指定元素
