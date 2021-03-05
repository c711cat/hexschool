var body = document.body //先宣告一個變數body，直接去選擇了BODY內容

function goRocket (e) {
  //↓這樣寫會知道按了哪顆按鈕，可以用console去查詢確定有沒有寫對
  console.log(e.keyCode)
  //若我的東西有各種條件去滿足的話，switch是不錯的寫法
  switch (e.keyCode) {
    case 49: //當滿足49時
      //49是按鍵盤上排數字1時，在網頁console中出現49，滿足的各種條件寫在case裡面
      document.querySelector('.rocket-1').style.bottom = '2000px'
      break
    //去更改css中style的狀態,原來的css中.rocket的bottom:0px，若要火箭飛，bottom就要寫多一點，例如:2000px，再用break終止
    //飛的速度可以用css中transition調整
    //transition: all 1s→移動秒數 cubic-bezier(1, 0.08, 0, 1.19);→可以用chrom - 檢查css - 去嘗試想要的動態效果調整
    //
    case 50:
      document.querySelector('.rocket-2').style.bottom = '2000px'
      break
    case 51:
      document.querySelector('.rocket-3').style.bottom = '2000px'
      break
  }
}

//除此之外再針對BODY寫一個監聽的東西
//監聽寫法 : addEventListener('執行的內容',function的名稱,false )
body.addEventListener('keydown', goRocket, false)
