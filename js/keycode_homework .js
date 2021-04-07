var bodyEl = document.body

function goRocket (e) {
  switch (e.keyCode) {
    case 49:
      document.querySelector('.rocket1').style.bottom = '2000px'
      break
    case 50:
      document.querySelector('.rocket2').style.bottom = '2000px'
      break
    case 51:
      document.querySelector('.rocket3').style.bottom = '2000px'
      break
    case 97:
      document.querySelector('.rocket1').style.bottom = '2000px'
      break
    case 98:
      document.querySelector('.rocket2').style.bottom = '2000px'
      break
    case 99:
      document.querySelector('.rocket3').style.bottom = '2000px'
      break
  }
}
bodyEl.addEventListener('keydown', goRocket, false)
