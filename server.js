const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const parseRes = require('./parseTree').parse
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Test App'))
app.post('/api/',(req, res)=> {
    let result= parseRes(req.body)
    if(result){
    res.send(result)
    }else{
     res.send({success:false,message:"Invalid Request"})   
    }
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))