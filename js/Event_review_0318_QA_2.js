//用onclick寫法-有及沒有按到alt時，跳出的視窗顯示有或沒有按到alt
var btnEl = document.querySelector('.btn-on')
btnEl.onclick = function (e) {
  if (e.altKey == true) {
    alert('有按到alt')
  }
  if (e.altKey == false) {
    alert('沒有按到alt')
  }
  console.log(e.altKey)
}
