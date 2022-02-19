//얕은 복사(Shallow copy), 깊은 복사(Deep copy)

// const user = {
//   name: 'Patrick',
//   age: 27,
//   emails: ['kuyt3122@naver.com']
// }
// const copyUser = user
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)


// 얕은 복사  Object.assign({}) ~~ {...user} 전개
// const user = {
//   name: 'Patrick',
//   age: 27,
//   emails: ['kuyt3122@naver.com']
// }
// // const copyUser = Object.assign({}, user)
// const copyUser = {...user}
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('-----')
// console.log('-----')

// user.emails.push('neo@zillinks.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)



// 깊은 복사
import _ from 'lodash'

const user = {
  name: 'Patrick',
  age: 27,
  emails: ['kuyt3122@naver.com']
}

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-----')
console.log('-----')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)