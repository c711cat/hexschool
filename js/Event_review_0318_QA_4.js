//Onclick寫法
var btn_On_El = document.querySelector('.btn_On')
btn_On_El.onclick = function (e) {
  alert('Onclick-fisrt')
}
btn_On_El.onclick = function (e) {
  alert('Onclick-second')
}

//AddEventListener寫法
var btn_Add_El = document.querySelector('.btn_Add')
btn_Add_El.addEventListener(
  'click',
  function (e) {
    alert('Add-1')
  },
  false
)
btn_Add_El.addEventListener(
  'click',
  function (e) {
    alert('Add-2')
  },
  false
)

//Onclick寫法只會跳出最後一個視窗
//AddEventListener寫法可以跳出多個視窗
