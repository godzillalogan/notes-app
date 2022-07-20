const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){
  return "ㄟ嘿嘿嘿嘿嘿嘿"
}

const addNote = (title, body) =>{
  const notes = loadNotes()
  // console.log('notes: ',notes)
  // notes.push({
  //   title: title,
  //   body: body
  // })
  // saveNotes(notes)
  // console.log('New note added')
  const duplicateNotes = notes.filter((note) => {  //找看看json檔裡面有沒有title一樣的 
    return note.title === title
  })
  if(duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added'))
  }else{
    console.log(chalk.red.inverse('New title taken'))
  }

}

const listNotes =() => {
  const notes = loadNotes()
  console.log(chalk.yellow.inverse('Your notes'))
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes) //JSON.stringify() ：物件變 JSON
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = (title, body) => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  }catch(e){
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes()  //取得所有的note
  // console.log('notes',notes)
  //console.log(chalk.underline.green.inverse('欸嘿嘿嘿嘿ㄏ'));

  const notesToKeep = notes.filter((note) => { //留下不要刪除的
    return  note.title !== title
  })
  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.inverse('No note found'))
  }
  console.log('New note added')

}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
}