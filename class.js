// function user(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// user.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const patrick = new user('Patrick', 'Park')

// console.log(patrick.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const heropy = {
//   name: 'Patrick',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function() {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const heropy = new User("Patrick")

// heropy.normal()
// heropy.arrow()

// const timer = {
//   name: 'Patrick!!',
//   timeout: function() {
//     setTimeout(()=> {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()

// ES6 Classes

// const heropy = {
//   name: 'Heropy',
//   normal() {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()

// function User(first,last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// 자바스크립트 클래스로 작성

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const heropy = new User("Patrick", 'Park')
// const amy = new User("Amy", 'Clarke')
// const neo = new User("Neo", 'Smith')

// console.log(heropy)
// console.log(amy.getFullName())
// console.log(neo.getFullName())


//-----------------------
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)

// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)

// console.log(myCar)
// console.log(daughtersCar)