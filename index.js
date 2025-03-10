const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()


const PORT = process.env.PORT || 7000

app.use(cors())
app.use(express.json())


const studentRoute = require('./routes/schoolroute')
app.use('/school',studentRoute)

app.get('/',(req,res)=>{
    res.send("post at /school/addSchool")
})


app.listen(PORT,()=>console.log("server started at"+PORT))