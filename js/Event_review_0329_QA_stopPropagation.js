//說明e.stopPropagation功能並舉例說明
var btnEl = document.querySelector('.btn')
btnEl.addEventListener(
  'click',
  function (e) {
    e.stopPropagation()
    alert('add-1')
  },
  false
)
var bodyEl = document.querySelector('.body')
bodyEl.addEventListener(
  'click',
  function (e) {
    alert('add-2')
  },
  false
)
