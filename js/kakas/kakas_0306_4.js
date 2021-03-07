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
  var star = '*'
  for (i = 0; i < n; i++) {
    console.log(star)
  }
}

//練習四：寫一個能回傳 n 個 * 的函式
function output_star (n) {
  for (i = 0; i < n; i++) {
    var i
    console.log('*')
  }
  return i + '個*'
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