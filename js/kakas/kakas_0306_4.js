// 1 + 2 + ... + n

//function sum(n) {
//var result = 1
// n = 4
// 1 + 2 + 3 + 4
// result = result + 0
// result = result + 1
// result = result + 2
// result = result + 3
// result = result + 4

//for(i = 0; i <= 4; i++) {
//  result = result + i -> result += i
// }
//return result
//}

//sum(1) // 1
//sum(2) // 1 + 2
//sum(3) // 1 + 2 + 3
//sum(4) // 1 + 2 + 3 + 4

//function star(n) {
// n = 4

//}
//star(0) ''
//star(1) '' + '*'
//star(2) '' + '*' + '*'
//star(3) '' + '*' + '*' + '*'
//star(4) '' + '*' + '*' + '*' + '*'
// 跑回圈時的樣子 ↓
// var str = ''
// str + '*' -> '*'
// str + '*' -> '**'
// str + '*' -> '***'
// str + '*' -> '****'
//每次都有跑一次 str + '*' ，所以可以讓這個每次自己加一次，可寫成 str += '*'
//最後再把結果印出或回傳，結果要在function大括號外面，不然會只跑一次就印出了

//練習一：請用 for loop，印出 1~9
var i
for (i = 0; i < 9; i++) {
  console.log(i + 1)
}

//練習二：寫一個能夠印出 1~n 的 function
function output (n) {
  var i
  for (i = 0; i < n; i++) {
    console.log(i + 1)
  }
}

//練習三：寫一個能夠印出 n 個 * 的函式
function output_star (n) {
  var i
  var str = ''
  for (i = 0; i < n; i++) {
    str += '*'
  }
  console.log(str)
}

//練習四：寫一個能回傳 n 個 * 的函式
function output_star (n) {
  var str = ''
  var i
  for (i = 0; i < n; i++) {
    str += '*'
  }
  return str
}

//練習五：寫一個 function, 可以輸入一個字母，並回傳是否為大寫字母
var english = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
var i
var en_len = english.length

function abc (n) {
  for (i = 0; i < en_len; i++) {
    if (n == english[i]) {
      console.log('是大寫字母')
      break
    } else if (n !== english[i]) {
      console.log('不是大寫字母')
      break
    }
  }
}

//練習六：寫一個 function, 可以傳入一個字串，並且回傳第一個大寫字母
//練習七：寫一個 function, 可以傳入一個數字陣列及 n，並回傳陣列裡面所有小於 n 的數量
//練習八：寫一個 function, 可以傳入一個數字陣列及 n, 並回傳陣列裡面所有小於 n 的數的總和
//練習九：寫一個 function, 可以傳入一個數字陣列及 n, 並回傳陣列裡面所有小於 n 的數字陣列
