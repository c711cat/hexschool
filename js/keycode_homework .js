var bodyEl = document.body

function goRocket (e) {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 49: //上方數字鍵1
      document.querySelector('.rocket1').style.bottom = '2000px'
      break
    case 50: //上方數字鍵2
      document.querySelector('.rocket2').style.bottom = '2000px'
      break
    case 51: //上方數字鍵3
      document.querySelector('.rocket3').style.bottom = '2000px'
      break
    case 97: //右邊數字鍵1
      document.querySelector('.rocket1').style.bottom = '2000px'
      break
    case 98: //右邊數字鍵2
      document.querySelector('.rocket2').style.bottom = '2000px'
      break
    case 99: //右邊數字鍵3
      document.querySelector('.rocket3').style.bottom = '2000px'
      break
  }
}
bodyEl.addEventListener('keydown', goRocket, false)
