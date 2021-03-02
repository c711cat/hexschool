//function{...}內的程式碼執行完後就清除了 - 在function內的var設定的變數:區域變數
//在function{...}外的var為全域變數，不會被清除，不一定要寫在function上或下面
//function優先執行，不論寫在上面或下面
//飢餓指數設定1~10分的選擇,若飢餓指數12時會選擇吃什麼東西
var hungry = 12;
function eat(food){
  console.log('I will go to eat '+food);
}
if (hungry >=1 && hungry < 3){
  eat('tomato.');
} else if (hungry >=3 && hungry < 7){
  eat('pasta.');
} else if (hungry >=7 && hungry <=10){
  eat('fry chicken.');
} else {
  console.log('I do not want to eat anything.');
}

//撈出哪些農場的小雞超過100隻以上
var farms = [
  {
  farmer : 'yoyo',
  chick : 50,
  banana  : 250,
  },
  {farmer: 'kiki',
  chick : 120,
  banana : 500,
},
{
  farmer : 'gigi',
  chick : 150,
  banana : 598,
}
]
var farmsTotal = farms.length;
for( var i=0; i<farmsTotal; i++ ){
  if (farms[i].chick>100){
    console.log(farms[i].farmer+'的小雞超過100隻以上');
  }
}
//第幾個農場主人是誰

for(var i=0; i<farmsTotal; i++){
  console.log('第'+[i+1]+'個農場主人是'+farms[i].farmer);
}

//加總各農場的香蕉採收量
var bananaTotal = 0;
for(var i=0; i<farmsTotal; i++){
  bananaTotal+=farms[i].banana;
}
 console.log('香蕉總採收量:'+bananaTotal);

 //我要買50隻雞，要去哪個農場,買完後該農場剩下幾隻雞
 
 for (var i=0; i<farmsTotal; i++){
   farms[i].chick>=50;
   console.log('可以到'+farms[i].farmer+'的農場購買');
   farms[i].chick-=50;
   console.log('買完後'+farms[i].farmer+'農場的雞剩下'+farms[i].chick+'隻');
   break;
 }