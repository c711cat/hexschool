var send = document.querySelector('.send')
send.addEventListener('click', singup, false)
function singup () {
  var account = {}
  var emailStr = document.querySelector('.email').value
  var passwordStr = document.querySelector('.password').value
  account.email = emailStr
  account.password = passwordStr
  var xhr = new XMLHttpRequest()
  xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send(JSON.stringify(account))
  xhr.onload = function () {
    var callbackData = JSON.parse(xhr.responseText)
    console.log(callbackData)
    if (callbackData.message == '帳號註冊成功') {
      alert('帳號註冊成功')
    } else {
      alert('帳號註冊失敗')
    }
  }
}
