var students = [
  {
    name: '小明',
    age: '18',
    phone: '0912345678'
  },
  {
    name: '小美',
    age: '17',
    phone: '0923456789'
  },
  {
    name: '小菜',
    age: '19',
    phone: '0934567891'
  }
]

//請在下方作答
var studentListEl = document.querySelector('#studentList')
var studentsLen = students.length
var i
for (i = 0; i < studentsLen; i++) {
  var newEl = document.createElement('li')
  newEl.textContent =
    students[i].name + students[i].age + '歲，手機號碼:' + students[i].phone
  studentListEl.appendChild(newEl)
}
