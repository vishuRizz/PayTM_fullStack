const express = require('express')
const app = express()
const mainRouter = require('./router/index')
const cors = require('cors')
app.use(cors());
app.use(express.json())



app.use("/api/v1", mainRouter)
app.listen(3000, ()=>{
    console.log("your backend is running on server port 3000")
})