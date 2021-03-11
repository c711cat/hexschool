// 第3題 3/6，3/10

var a = true
var b = true
var c = false
var d = false

console.log(1, a && b && c && d) // 1.false
console.log(2, a && b && c || d) // 2.false
console.log(3, a && b || c && d) // 3.true
console.log(4, a && b || c || d) // 4.true
console.log(5, a || b && c && d) // 5.true
console.log(6, a || b && c || d) // 6.true
console.log(7, a || b || c && d) // 7.true
console.log(8, a || b || c || d) // 8.true


