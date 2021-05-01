var xhr = new XMLHttpRequest()
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true)
xhr.send(null)
xhr.onload = function () {
  console.log(xhr.responseText)
  if (xhr.status == 200) {
    var str = JSON.parse(xhr.responseText)
    document.querySelector('.message').textContent = str[0].name
  } else {
    console.log('資料錯誤')
  }
}
