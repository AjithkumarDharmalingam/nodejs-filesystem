const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 8000


app.get('/',(req,res)=>{
    let date = new Date()

    const fileName = date.toISOString().slice(0,19).replace(/:/g,'-')

    fs.writeFile(`${fileName}.txt`,`${fileName}`,'utf-8',(err)=>{
        if(err)
           console.log("loging",err);
    })

    fs.readFile(`${fileName}.txt`,'utf-8',(err,data)=>{
        res.send(data)
    })
})

app.listen(PORT,()=>console.log("Listening to "+PORT))