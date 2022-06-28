const getBooks = function a(){
  return new Promise((resolve)=>{
    resolve('Books Git')
  })
}

getBooks().then((books)=>{
  console.log(books)
})



