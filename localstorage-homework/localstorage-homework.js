var sendButton = document.querySelector('.send')

function saveList (e) {
  var listString = document.querySelector('.text').value
  localStorage.setItem('toDoList', listString)
}
sendButton.addEventListener('click', saveList)
