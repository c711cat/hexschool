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

var signinBtn = document.querySelector('.signin-btn')
signinBtn.addEventListener('click', signin, false)
function signin () {
  var signinEmailStr = document.querySelector('.signin-email').value
  var signinPasswordStr = document.querySelector('.signin-password').value
  var signinAccount = {}
  signinAccount.email = signinEmailStr
  signinAccount.password = signinPasswordStr
  var signinXhr = new XMLHttpRequest()
  signinXhr.open(
    'post',
    'https://hexschool-tutorial.herokuapp.com/api/signin',
    true
  )
  signinXhr.setRequestHeader('Content-type', 'application/json')
  signinXhr.send(JSON.stringify(signinAccount))
  signinXhr.onload = function () {
    var signinCallback = JSON.parse(signinXhr.responseText)
    console.log(signinCallback)
    if (signinCallback.message == '登入成功') {
      alert('登入成功')
    } else {
      alert('"此帳號不存在或帳號密碼錯誤')
    }
  }
}
