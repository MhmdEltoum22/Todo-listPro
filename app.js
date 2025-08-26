const express = require("express")
const mongoose = require("mongoose")
const taskrouter = require('../route/taskroutes')
const app = express()


app.use(express.json())

const  port = process.env.PORT ||3000
const url = process.env.DB_URL || "mongodb://localhost:27017/todo_list"

// concation with database
function Dbconnection(){
mongoose.connect(url).then(()=>{
    console.log("conected to database")
}).catch((err)=>{
    console.log(err)
    console.log("not conected to database")
})
}
// routes
app.use(taskrouter)
app.listen(port,()=>{
    Dbconnection()
    console.log ('Server is running on port ' + port)
})
