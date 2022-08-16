//const { Mongoose } = require("mongoose");

const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    pname:String,
    price:Number,
    qty:Number,
    image:String
})

module.exports=mongoose.model("Product",productSchema)