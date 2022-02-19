// .length
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)

// console.log([].length)



// .concat()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)



// .forEach()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// fruits.forEach(function(element, index, array) {
//   console.log(element, index, array)   // array는 참조
// })



// .map
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach(function(fruit, index){
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map((fruit, index) ==> {
//   return `${fruit}-${index}`
// })
// console.log(b)

// const c = fruits.map((fruit, index) => ({
//     id: index,
//     name: fruit
//   }))
// console.log(c)


// .filter()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number=>  number < 3)
// console.log(a)

// const b = numbers.filter(number =>  number < 3)
// console.log(b)



// .find() .findIndex()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)



// .includes()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('Patrick')
// console.log(b)



// .push() .unshift()
// 원본 수정됨 주의!!!

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)



// .reverse()
// 원본 수정됨 주의!!!

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)



// .splice()
// 원본 수정됨 주의!

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// // numbers.splice(2, 1)
// // numbers.splice(2, 2)
// // numbers.splice(2, 0, 999)
// numbers.splice(2, 1, 99)

// console.log(numbers)

// fruits.splice(2, 0, 'Orange')

// console.log(fruits)