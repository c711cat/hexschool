//練習執行印出100個你好
var i
function sayhi (n) {
  for (i = 0; i < n; i++) {
    console.log('你好')
  }
}
sayhi(100)

//DOM章節
//選擇器寫法
//因為下面這行這樣寫太寬了，瀏覽時有點不方便，可以用el取代前半段，不用每次都要打一串
//document.getElementById('titleId').textContent = '123' 這行等於下面兩行
var el = document.getElementById('titleId')
el.textContent = '1234'

//因為一個網頁只能有一個ID，所以有getElementById這個存在，
//但是還要選擇其他的命名時，有另外一個選擇器:querySelector

//若要選擇Id時前面要加#
var ql = document.querySelector('#titleId')
ql.textContent = '456'

//選擇class時前面加一個點
var sl = document.querySelector('.pClass')
sl.textContent = '789'

//選擇class後面的"標籤"時: .class名稱 空一格打標籤名
var al = document.querySelector('.p2Class em')
al.textContent = '555'

//querySelector只會抓第一個去改變，這時若有兩個重複的class可以用querySelectorAll
var wl = document.querySelectorAll('.p3Class em')
wl.textContent = '33'
console.log(wl) //用console.log去看的話會出現[em,em textContent:'33']
//上行只會在console呈現33

//以下用陣列方式寫，可以在網頁上呈現33
wl[0].textContent = '33'
wl[1].textContent = '33'

//以上陣列寫法，多筆資料時可以使用FOR去寫
var al = document.querySelectorAll('.p4Class em')
var alal = al.length
var i
for (i = 0; i < alal; i++) {
  al[i].textContent = i + '135'
  console.log(i + '135')
}

var zl = document.querySelector('.h2Class a')
//要把h2Class設定裡面連結成其他內容時，需要重新設定一個標籤，
//使用setAttribute:設定屬性的意思(每個物件可以給予屬性)，如下:
zl.setAttribute('href', 'http://www.yahoo.com.tw')

//使用CSS更改顏色及字體大小
var strel = document.querySelector('.str')
strel.setAttribute('id', 'strId')

//使用CONSOLE去撈出zl裡面的屬性內容
//var一個新的名稱，寫入以下第一行的程式碼
var zl2 = document.querySelector('.h2Class a').textContent
console.log(zl2) //開網頁看CONSOLE就會有 h2連結 的字

// 用js操控html的方法 //
//innerHTML:
//方法:組完字串後，傳進語法進行渲染
//優點:效能快
//缺點:資安風險，要確保來源沒問題

//createElement
//方法:以DOM節點來處理
//優點:安全性高
//缺點:效能差

//innerHTML用法:
var mainel = document.querySelector('.main')
mainel.innerHTML = '<h1 class="blue">標題一</h1>'

var main2el = document.querySelector('.main2')
var mainstr = '<p>標題2</p>'
main2el.innerHTML = mainstr + mainstr

var ulel = document.querySelector('.list')
var link = 'http://www.google.com'
var Name = '查理'
ulel.innerHTML = '<li><a href="' + link + '">' + Name + '</a></li>'

//innerHTML 與 FOR 用法
//將以下農場的農夫名字依序撈出呈現在網頁上
var farms = [
  {
    farmer: 'Casper',
    dogs: ['James', 'Bond']
  },
  {
    farmer: 'Charlie',
    dogs: ['Pipi']
  }
]

var farmsel = document.querySelector('.farmslist')
var farmsLen = farms.length
var farmsStr = ''
// var farmsStr = ''  → 空字串 - 全域變數
//可以把跑出來的資料記錄在全域變數中，
//再跑第二筆出來依序記錄在此，若沒有這個全域變數，只會紀錄最後一筆資料
//標籤前後各一個單引號 例如:'<li> </li>'
//標籤內容前後各一個加號，加號外面在各一個單引號，例如:'<li>   '+  +'   </li>'
var i
for (i = 0; i < farmsLen; i++) {
  var content = '<li>' + farms[i].farmer + '</li>'
  farmsStr += content
}
farmsel.innerHTML = farmsStr

//createElement 用法:
//在HTML裡面的P段落命名一個tryCreateEl，要在P段落中加一個<em>1234</em>，用createElement方法

//先增加一個標籤
var tryCreateStr = document.createElement('em')

//再增加一個JS的動態
tryCreateStr.textContent = '1234'

//利用CSS設定的樣式加入其中的用法setAttribute('class','blue')
tryCreateStr.setAttribute('class', 'blue')

//最後再增加子節點-appendChild，掛在HTML中
document.querySelector('.tryCreateEl').appendChild(tryCreateStr)

var houses = [
  {
    hoster: 'Nini',
    cats: ['Mimi', 'Bibi']
  },
  {
    hoster: 'Yoyo',
    cats: ['Sisi', 'Haha']
  }
]
//createElemrnt 與 FOR 用法:
//撈出每個家的主人名字
var tryCreateElFor_el = document.querySelector('.tryCreateElFor')
var housesLen = houses.length
var i
for (i = 0; i < housesLen; i++) {
  var housesStr = document.createElement('li')
  housesStr.textContent = houses[i].hoster
  tryCreateElFor_el.appendChild(housesStr)
}

var firstId = document.querySelector('#first')
firstId.textContent = '我是firstId'

var secondClass = document.querySelector('.second')
secondClass.textContent = '我是secondClass'

var allClass = document.querySelectorAll('.all')
allClass[0].textContent = '我是allClass的第一個'
allClass[1].textContent = '我是allClass的第二個'
allClass[2].textContent = '我是allClass的第三個'
