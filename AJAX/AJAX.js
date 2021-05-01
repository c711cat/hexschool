var xhr = new XMLHttpRequest()
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true)
xhr.send(null)
xhr.onload = function () {
  console.log(xhr.responseText)
  var str = JSON.parse(xhr.responseText)
  var txt = (document.querySelector('.message').textContent = str[0].name)
  console.log(txt)
}
