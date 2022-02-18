// import getType from './getType'
// console.log(typeof "Hello World!");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

//산술 연산자(arithmetic oerator)

// console.log(1+2)
// console.log(5-7)
// console.log(3*4)
// console.log(10/2)
// console.log(7%5)

// let a = 2
// a=a+1
// a+=1
// console.log(a)

// 비교 연산자(comparison operator)

// const a = 1
// const b = 3

// console.log(a === b)

// function isEqual(x,y) {
//   return x === y
// }

// console.log(isEqual(1,1))

// console.log(a !== b)

// 논리 연산자(logical operator)

// const a = 1===123
// const b = 'AB' === 'ABC'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&: ', a && b && c)
// console.log('||: ', a || b)
// console.log('!: ', !a)

// 삼항 연산자(ternary operator)

// const a = 1<2

// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


// import random from './getRandom'

// 조건문 (If statement)
// 조건문 (Switch statement)

// const a = random()

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
// }
// if(a===0){
//   console.log('a is 0')
// } else if(a === 2) {
//   console.log('a is 2')
// } else {
//   console.log('rest...')
// }

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건)

// const ulEl = document.querySelector('ul')


// for (let i = 0; i<10; i+=1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i+1}`
//   if((i+1)%2===0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// 변수 유효범위(Variable Scope)
// var, let, const

// function scope() {
//   console.log(a)
//   if(true) {
//     var a = 123
//   }
// }

// scope()

// 형 변환(Type conversation) >> ==(동등연산자) 을 쓰면 형변환이 일어남

// const a = 1
// const b = '1'

// === (일치연산자)를 써야함
// console.log(a === b)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if(true) {
//   console.log(123)
// }