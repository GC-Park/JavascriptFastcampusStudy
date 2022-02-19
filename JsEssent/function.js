//함수 복습

// function sum() {
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// }


// console.log(sum(7, 3))

// 화살표 함수
// () => {}   vs   function () {}

// const double = function (x) {
//   return x*2
// }
// console.log('double: ', double(7))

// const doubleArrow = (x) => ({ name: 'Patrick' })
// const doubleArrow = (x) => x*2
// const doubleArrow = (x) => {
//   return x*2
// }
// console.log('doubleArrow', doubleArrow(7))

// 즉시실행함수
// IIFE, Immedeately-Invoked Function Expression

// const a = 7
// function double() {
//   console.log(a*2)
// }
// double();

// (function () {
//   console.log(a*2)
// })();

// (function () {
//   console.log(a*2)
// }());


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double()

// const double = function () {
//   console.log(a*2)
// }

// function double() {
//   console.log(a*2)
// }


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer = setTimeout(() => {
//   console.log("Patrick!")
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', ()=>{
//   clearTimeout(timer)
// })

// const timer = setInterval(() => {
//   console.log("Patrick!")
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', ()=>{
//   clearInterval(timer)
// })

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// function timeout(callback) {
//   setTimeout(()=>{
//     console.log("Patrick!")
//     callback()
//   }, 3000)
// }

// timeout(()=>{
//   console.log('Done')
// })