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
