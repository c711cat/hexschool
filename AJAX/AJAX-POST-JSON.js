var account = {
  email: 'qquu@gmail.com',
  password: '1234'
}
var xhr = new XMLHttpRequest()
xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send(JSON.stringify(account))
