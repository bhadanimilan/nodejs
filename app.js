const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app =express();
const PORT=process.env.PORT || 9000


const url = "mongodb+srv://Milan:tops123@cluster0.ygwotpu.mongodb.net/Test?retryWrites=true&w=majority"
app.use(express.json())

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB Connection!!!");
}).catch(err=>{
    console.log(err)
})

const pRouter=require("./router/productrouter")
app.use("/",pRouter);

app.get("/data",(req,resp)=>{
    resp.send("my App calling...");
})

app.listen(PORT,(req,resp)=>{
    console.log("server ruuning on Port"+PORT);
})