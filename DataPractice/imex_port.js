import _ from 'lodash' // From 'node_modules'!
import checkType from './getType'
//import { random, user as heropy} from './getRandom'
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
// console.log(random(), random())
// console.log(heropy)
console.log(R)