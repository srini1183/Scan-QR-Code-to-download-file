const express = require('express') 
const path = require('path')
const app = express()


const file = path.join(__dirname,'srini.jpg') //Path to the file

app.get('/download',(req,res)=>{
   res.download(file) 
})

app.listen(3000,()=>{
    console.log('Server running..') //Server running on port 3000
})
