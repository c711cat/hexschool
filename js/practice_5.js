var data = {
  responseCode: "OD-0101-S",
  responseMessage: "處理完成",
  totalPage: "30",
  totalDataSize: "59940",
  page: "1",
  pageDataSize: "2000",
  responseData: [
  
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "未滿15歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "15～19歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "20～24歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "25～29歲",
  birth_count: "1"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "30～34歲",
  birth_count: "1"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "35～39歲",
  birth_count: "1"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "40～44歲",
  birth_count: "2"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "45～49歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "5胎",
  birth_sex: "男",
  mother_age: "50歲以上",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "未滿15歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "15～19歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "20～24歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "25～29歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "30～34歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "35～39歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "40～44歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "45～49歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "6胎",
  birth_sex: "男",
  mother_age: "50歲以上",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "7胎",
  birth_sex: "男",
  mother_age: "未滿15歲",
  birth_count: "0"
  },
  {
  statistic_yyy: "108",
  according: "按發生日期分",
  site_id: "新北市土城區",
  birth_order: "7胎",
  birth_sex: "男",
  mother_age: "15～19歲",
  birth_count: "0"
  }
  ]
  }

  //撈出birth_count(出生數量)超過100的地區(site_id)及(mother_age)
var total = data.responseData.length;
console.log(total);
var i;
for( i = 0; i < total; i++){
  if(data.responseData[i].birth_count>100){
    var site = data.responseData[i].site_id;
    var momage = data.responseData[i].mother_age;
    console.log(site + '的出生數量超過100，媽媽的年齡為:' + momage);
  }
}

  //撈出各地區母親年齡mother_age: "未滿15歲"的小孩出生數量(birth_count)
  for(i = 0; i < total; i++){
    if(data.responseData[i].mother_age=='未滿15歲'){
      var site = data.responseData[i].site_id;
      var kidnumber = data.responseData[i].birth_count;
      console.log(site + '媽媽未滿15歲的小孩出生數量為:' + kidnumber);
    }
  }

  //撈出符合birth_order: "2胎"的所有物件資料
  for( i = 0; i < total; i++){
    if(data.responseData[i].birth_order=='2胎'){
      var year = data.responseData[i].statistic_yyy;
      var according = data.responseData[i].according;
      var site = data.responseData[i].site_id;
      var order = data.responseData[i].birth_order;
      var sex = data.responseData[i].birth_sex;
      var momage = data.responseData[i].mother_age;
      var kidnumber = data.responseData[i].birth_count;
      console.log( year + '年度，根據' + according + '，地區為:' + site + '，1次胎數為' + order + '，性別:' + sex + '，母親年齡:' + momage + '的小孩出生數量為:' + kidnumber);
    }
  }