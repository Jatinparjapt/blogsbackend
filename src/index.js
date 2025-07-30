const express = require("express")
const app = express()
const PORT = 3000
app.get("/" , (req , res)=>{
    res.status(200).json({data: "home page " })
})
app.listen(PORT , ()=>{
    console.log("server started")
})
