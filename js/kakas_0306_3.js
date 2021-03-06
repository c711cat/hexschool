

var a = true
var b = true
var c = false
var d = false

console.log(1, a && b && c && d) // 
console.log(2, a && b && c || d) //
console.log(3, a && b || c && d) //
console.log(4, a && b || c || d) //
console.log(5, a || b && c && d) //
console.log(6, a || b && c || d) //
console.log(7, a || b || c && d) //
console.log(8, a || b || c || d) //


