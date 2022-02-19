// const userAge = {
//   //key : value
//   name: 'Patrick',
//   age: 27
// }
// const userEmail = {
//   name: 'Patrick',
//   email: 'kuyt3122@naver.com'
// }

// // const target = Object.assign(userAge, userEmail)
// const target = Object.assign({}, userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = {k:123}
// const b = {k:123}
// console.log(a === b)


//--------------------------------------
// const user = {
//   //key : value
//   name: 'Patrick',
//   age: 27,
//   email: 'kuyt3122@naver.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// // ['name', 'age', 'email']

// console.log(user['email'])

// const values = keys.map(key=>user[key])
// console.log(values)



// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

// const user = {
//   //key : value
//   name: 'Patrick',
//   age: 27,
//   email: 'kuyt3122@naver.com'
// }
// const { name: heropy, age, email, address } = user
// // E.g user.address

// console.log(`사용자의 이름은 ${heropy}입니다.`)
// console.log(`${heropy}의 나이는 ${age}세입니다.`)
// console.log(`${heropy}의 이메일 주소는 ${email}입니다.`)
// console.log(address)

// const fruits = ['Apple','Banana', 'Cherry']
// // const [a,b,c,d] = fruits
// const [,b] = fruits
// // console.log(a, b, c, d)
// console.log(b)


// 전개 연산자 (Spread)

// const fruits = ['Apple','Banana', 'Cherry', 'Orange']
// console.log(fruits)
// console.log(...fruits)
// // console.log('Apple', 'Banana', 'Cherry')

// // function toObject(a, b, ...c) {  //...c = rest parameter
// //   return {
// //     a: a,
// //     b: b,
// //     c: c
// //   }
// // }


// //축약형
// const toObject=(a, b, ...c) => ({a, b, c})  //...c = rest parameter


// console.log(toObject(...fruits))
// // console.log(toObject(fruits[0], fruits[1], fruits[2]))