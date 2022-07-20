const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')
const add = require('./utils.js')
const getNotes = require('./notes.js')
// const command = process.argv[2]
// const msg = getNotes()

//Customize yargs version
// yargs.version('1.1.0')

//Create add cpmmand
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body:{
      description:"body body",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title, argv.body)
  }
})

//Create remove command
yargs.command({
  command:'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.removeNote(argv.title, argv.body)
  }
})
//Create list command
yargs.command({
  command:'list',
  describe: 'list your notes',
  handler: function () {
    console.log('listing out all note')
  }
})

//Create read command
yargs.command({
  command:'read',
  describe: 'read',
  handler() {
    console.log('Reading a note')
  }
})



// console.log(process.argv)
console.log(yargs.argv)



// if(command === 'add'){
//   console.log('adding note')
// }else if(command === 'remove'){
//   console.log('removing note')
// }


// const name = 'Andrew'
// const sum = add(4, -2)
// console.log(sum)


// console.log(msg)
// console.log('validator.isURL:',validator.isURL('godzillaexample'))
// console.log(chalk.underline.green.inverse('欸嘿嘿嘿嘿ㄏ'));
//fs.writeFileSync('哥吉拉.txt', '我是哥吉拉')

// fs.appendFileSync('哥吉拉.txt', '，我是哥吉拉2.0')

