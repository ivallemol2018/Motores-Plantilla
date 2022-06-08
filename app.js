const express = require('express')
const api = require('./api')

const app = express()

app.set('views','./views')
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/productos',api)

app.get('/',(req,res)=>{
  res.render('index')
})

const server = app.listen(8080,()=>{
  console.log('Server listening...')
})

server.on('error',()=>{
  console.log('Error server',e)
})