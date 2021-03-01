var data = 
{"updateTime":"2021-02-28 14:10:00","News":[{"chtmessage":"02/27 14:09 兒童新樂園周邊停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-27 14:09:42","endtime":"2021-02-28 14:09:42","updatetime":"2021-02-27 14:09:42","content":"02/27 14:09 兒童新樂園周邊停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/27 14:12 西門町周邊活動交管請改道，下午13-18時封閉管制成都路（中華路至西寧南路）。","engmessage":"","starttime":"2021-02-27 14:12:20","endtime":"2021-02-28 14:12:20","updatetime":"2021-02-27 14:12:20","content":"02/27 14:12 西門町周邊活動交管請改道，下午13-18時封閉管制成都路（中華路至西寧南路）。"},{"chtmessage":"02/27 14:28 福林公園地下停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-27 14:28:04","endtime":"2021-02-28 14:28:04","updatetime":"2021-02-27 14:28:04","content":"02/27 14:28 福林公園地下停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/27 17:19 市高往西全線車多，請改道","engmessage":"","starttime":"2021-02-27 17:19:54","endtime":"2021-02-28 17:19:54","updatetime":"2021-02-27 17:19:54","content":"02/27 17:19 市高往西全線車多，請改道"},{"chtmessage":"02/28 11:08 兒童新樂園周邊停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-28 11:08:54","endtime":"2021-03-01 11:08:54","updatetime":"2021-02-28 11:08:54","content":"02/28 11:08 兒童新樂園周邊停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/28 11:08 動物園周邊停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-28 11:08:32","endtime":"2021-03-01 11:08:32","updatetime":"2021-02-28 11:08:32","content":"02/28 11:08 動物園周邊停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/28 11:08 福林公園地下停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-28 11:08:07","endtime":"2021-03-01 11:08:07","updatetime":"2021-02-28 11:08:07","content":"02/28 11:08 福林公園地下停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/28 12:41 碧山巖停車場已滿場，請多多利用大眾運輸。rn","engmessage":"","starttime":"2021-02-28 12:41:31","endtime":"2021-03-01 12:41:31","updatetime":"2021-02-28 12:41:31","content":"02/28 12:41 碧山巖停車場已滿場，請多多利用大眾運輸。rn"},{"chtmessage":"02/28 12:44 峨眉立體停車場已滿場，請多多利用大眾運輸。","engmessage":"","starttime":"2021-02-28 12:44:20","endtime":"2021-03-01 12:44:20","updatetime":"2021-02-28 12:44:20","content":"02/28 12:44 峨眉立體停車場已滿場，請多多利用大眾運輸。"},{"chtmessage":"02/28 13:28 福林公園地下停車場已滿場，請多多利用大眾運輸。","engmessage":"","starttime":"2021-02-28 13:28:19","endtime":"2021-03-01 13:28:19","updatetime":"2021-02-28 13:28:19","content":"02/28 13:28 福林公園地下停車場已滿場，請多多利用大眾運輸。"}]}

console.log(data.News.length);
console.log(data.News[0].chtmessage);
console.log(data.News[1].chtmessage);
console.log(data.News[2].chtmessage);
console.log(data.News[3].chtmessage);
console.log(data.News[4].chtmessage);
console.log(data.News[5].chtmessage);
console.log(data.News[6].chtmessage);
console.log(data.News[7].chtmessage);
console.log(data.News[8].chtmessage);
console.log(data.News[9].chtmessage);

var total = data.News.length;
var i;
for (i = 0; i < total; i++) {
  console.log('第' + [i + 1] + '筆的 chtmessage:' + data.News[i].chtmessage);
}
