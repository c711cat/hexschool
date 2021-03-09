var btn = document.querySelector('.btnClass')
var call = document.querySelector('.btnCall')
function saveName (e) {
  var str = document.querySelector('.textClass').value
  localStorage.setItem('myName', str)
  // setItem設定一個值到網頁的Application裡面的file:// Key => myName ; Value => str
}

btn.addEventListener('click', saveName)
call.addEventListener('click', function () {
  var str = localStorage.getItem('myName')
  //getItem 取出裡面值用
  alert('你的名字叫做' + str)
})

// 1.將 array 轉為 string
//會用到JSON.stringify(   )那行的程式碼

// 2.將 string 轉為 array
//JSON.parse(  )

// 3.學以上兩點是因為 localstorage 只會保存 string 資料
var country = [
  {
    farmer: 'Vivi'
  }
]
localStorage.setItem('countryItem', country)
//把陣列資料存入localStorage中，
//寫法的意思:key的名稱為countryItem，把上述陣列儲存進去，打入陣列的名稱country
//因為目前陣列的資料是字串(用console.log(typeof(...))去查詢目前的資料是什麼屬性
//利用下方語法 將陣列修正為字串，宣告一個變數存取，

//JSON.stringify(country) -> JSON 將 ARRAY 的資料-陣列名稱轉為字串的意思
var countryString = JSON.stringify(country)
//可以用console.log去查詢是否已經變成字串
//console.log(countryString)

//****  從localStorage取出來的值一律都是string  ****//
//若要把localStorage資料取出來時，先設一個變數
var getData = localStorage.getItem('countryItem')
//若要把取出來的值變成ARRAY方式去讀取時，寫法如下:
var getDataAry = JSON.parse(getData)
//用console.log去查詢
console.log(typeof getDataAry)
