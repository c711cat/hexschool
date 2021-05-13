var cm = document.querySelector('.height').value
var kg = document.querySelector('.weight').value
var btnAndResult = document.querySelector('.btn-and-result')

renew()

function renew () {
  var str = ''
  if (cm === '' && kg === '') {
    str +=
      '<div class="result-btn"> <input type="button" value= "看結果" /> </div>'
  }
  btnAndResult.innerHTML = str
}

var resultBtn = document.querySelector('.result-btn')

resultBtn.addEventListener('click', BMI, false)

function BMI (e) {
  var str = ''
  cm = document.querySelector('.height').value
  kg = document.querySelector('.weight').value
  var bmi = kg / (cm / 100) / (cm / 100)
  bmi = bmi.toFixed(2)
  if (bmi < 18.5) {
    str += `<div class="underweight-circle-out">
          <div class="circle-in">
            <div class="underweight-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="underweight-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="underweight">過輕</span>`
  } else if (18.5 <= bmi && bmi < 24) {
    str += `<div class="ideal-circle-out">
          <div class="circle-in">
            <div class="ideal-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="ideal-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="ideal">理想</span>`
  } else if (24 <= bmi && bmi < 27) {
    str += `<div class="overweight-circle-out">
          <div class="circle-in">
            <div class="overweight-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="overweight-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="overweight">過重</span>`
  } else if (27 <= bmi && bmi < 30) {
    str += `<div class="mild-obesity-circle-out">
          <div class="circle-in">
            <div class="mild-obesity-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="mild-obesity-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="mild-obesity">輕度肥胖</span>`
  } else if (30 <= bmi && bmi < 34) {
    str += `<div class="moderate-obesity-circle-out">
          <div class="circle-in">
            <div class="moderate-obesity-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="moderate-obesity-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="moderate-obesity">中度肥胖</span>`
  } else if (bmi >= 34) {
    str += `<div class="severe-obesity-circle-out">
          <div class="circle-in">
            <div class="severe-obesity-BMI-result">
              <p class="BMI-value">${bmi}</p>
              <p class="BMI">BMI</p>
            </div>
          </div>
          <div class="icon-loop-out">
            <div class="severe-obesity-icon-loop-in">
              <img src="./BMI-calculator-img/icons_loop.png" alt="icons_loop" />
            </div>
          </div>
        </div>
        <span class="severe-obesity">重度肥胖</span>`
  }
  btnAndResult.innerHTML = str
}
