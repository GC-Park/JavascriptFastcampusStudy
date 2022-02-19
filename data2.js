import _ from 'lodash'
import { user } from './getRandom'

// const usersA = [
//   { userId: '1', name: 'HEROPY' },
//   { userId: '2', name: 'Neo' }
// ]
// const usersB = [
//   { userId: '1', name: 'HEROPY' },
//   { userId: '3', name: 'Amy' }
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)




//-------------------------------------------

const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evans' },
  { userId: '5', name: 'Patrick' },
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name:'HEROPY'})
console.log(users)