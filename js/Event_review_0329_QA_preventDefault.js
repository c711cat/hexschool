//說明e.preventDefault功能並舉例說明
var linkEl = document.querySelector('.link')
linkEl.addEventListener(
  'click',
  function (e) {
    console.log('有執行但無跳轉網頁')
    e.preventDefault()
  },
  false
)
