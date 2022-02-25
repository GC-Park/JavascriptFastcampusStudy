const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'kuyt3122@naver.com',
    'qkrtk9230@likelion.org'
  ]
}

localStorage.setItem('user', JSON.stringify(user))
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age=22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))