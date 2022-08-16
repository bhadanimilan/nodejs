const express=require("express")
const router= express.Router()
const Product= require("../model/product")

router.post("/products",async(req,resp)=>{
    try {
        const prod =new Product(req.body)
        const result=await prod.save();
        resp.send(result); 
    } catch (error) {
        resp.send(error);
    }
})

router.get("/products",async(req,resp)=>{
    try {
       const result=await Product.find();
       resp.send(result); 
    } catch (error) {
       resp.send(error); 
    }
})

module.exports=router