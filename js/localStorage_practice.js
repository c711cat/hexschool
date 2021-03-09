var btn = document.querySelector('.btnClass')
var call = document.querySelector('.btnCall')
function saveName (e) {
  var str = document.querySelector('.textClass').value
  localStorage.setItem('myName', str)
  // setItem設定一個值到網頁的Application裡面的file:// Key => myName ; Value => str
}

btn.addEventListener('click', saveName)
call.addEventListener('click', function () {
  var str = localStorage.getItem('myName')
  //getItem 取出裡面值用
  alert('你的名字叫做' + str)
})


// 1.將 array 轉為 string
// 2.將 string 轉為 array
// 3.學以上兩點是因為 localstorage 只會保存 string 資料
var country = [
  {
    farmer: 'Vivi'
  }
]