const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = '哥吉拉世紀霸主'
user.age = 87

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

console.log('user.name:',user.name)
console.log('user.age:',user.age)

// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)