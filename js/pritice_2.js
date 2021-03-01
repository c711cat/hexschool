document.getElementById('submitId').onclick = function (){
  var hamPrice = 65;
  var cokePrice = 25;
  var hamNum = parseInt(document.getElementById('hamburgerId').value)*hamPrice;
  var cokeNum = parseInt(document.getElementById('cokeId').value)*cokePrice;
 
  document.getElementById('totalId').textContent = hamNum + cokeNum;
  console.log(hamNum+cokeNum);
  
}
//陣列Array//
var cornField = [2,5,8];
//陣列從0開始，console.log()可以輸出在檢查網頁右邊console中//
console.log(cornField[0]);
console.log(cornField[1]);
console.log(cornField[2]);
//定義變數玉米田2等於玉米田陣列中的第2個，可以在console中查詢玉米田2//
var cornField2 = cornField[1];
console.log(cornField2);
//可以設一個空的矩陣變數，後續再用push加上陣列中的內容//
var roseField = [];
roseField.push(7);
roseField.push(8);
roseField.push(9);
roseField.push(10);
console.log(roseField);
//查詢幾個玉米田用法，後面加上length//
console.log('我總共有'+cornField.length+'個玉米田');

//物件object寫法//
var farm = {
  farmer: 'Bob',
  dogs: ['kiki','bibi'],
  cats: 2,
  duck:6,
  chick:12,
  poultryTotal: function(){
    var num = farm.duck + farm.chick;
    console.log('農場共有'+ num +'隻家禽');
  }
};

var house = {
  room: 3,
  son: ['haha','didi'],
  father: 'john',
  mom: 'mimi',
};
console.log('第2個兒子叫'+house.son[1]);
farm.poultryTotal();

//物件中加入陣列,找出農場中第一隻貓名字//
var cocofarms = [
  {
    farmer:'yoyo',
    dogs:['kiki','bibi'],
},
{
  farmer:'fifi',
  cats:['yaya','yuyu'],
}
]
console.log(cocofarms[1].cats[1]);
 
var SunClass = {
  teacher: "Jane",
  student: ["Andy","Peter","John"],
  studentGrade: [89,100,99],
  studentNumber: 3,
  classRoom: "B107",
  countStudent: function(){
      console.log("學生共有"+SunClass.studentNumber+"位");
  },
  showClassRoom: function(){
      console.log("SunClass班在"+SunClass.classRoom+"上課喔");
  },
};
SunClass.countStudent();
SunClass.showClassRoom();

var hexSchool = [
  //第一個物件
  {
      teacher: "Jane",
      student: ["Andy","Peter","John"],
      studentGrade: [89,100,99],
      studentNumber: 3,
      classRoom: "B104"
  },
 
  //第二個物件
  {
      teacher: "Gary",
      student: ["Sam","Jenny","Rose"],
      studentGrade: [88,79,99],
      studentNumber: 3,
      classRoom: "C104"
  }
];

//請在下方作答
var myTeacher = hexSchool[1].teacher;
var myStudent = hexSchool[0].student[2];
console.log(myTeacher);
console.log(myStudent);