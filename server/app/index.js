
const express =require('express')
const app = express()
require('dotenv').config()

app.use(express.static(__dirname + '/public'))


// app.get('/',(req,res)=>{
// res.sendFile(__dirname + '/public/index.html')
// })

app.listen(process.env.PORT, ()=> console.log(`express  App is UP on port ${process.env.PORT}`))