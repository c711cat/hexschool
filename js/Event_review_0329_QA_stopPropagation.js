//說明e.stopPropagation功能並舉例說明
var btnEl = document.querySelector('.btn')
btnEl.addEventListener(
  'click',
  function (e) {
    alert('add-1')
  },
  false
)
e.stopPropagation()
btnEl.addEventListener(
  'click',
  function (e) {
    alert('add-2')
  },
  false
)
