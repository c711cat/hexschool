var btnEl = document.querySelector('.btn-add')

btnEl.addEventListener(
  'click',
  function (e) {
    if (e.altKey == true) {
      alert('有按到alt')
    }
    if (e.altKey == false) {
      alert('沒有按到alt')
    }
    console.log(e.altKey)
  },
  false
)
