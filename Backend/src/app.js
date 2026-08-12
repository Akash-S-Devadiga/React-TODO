const express=require('express');
const todoModel=require('./models/todo.model')
const app=express();

app.use(express.json())

const cors=require('cors');
const { default: mongoose } = require('mongoose');
app.use(cors())

app.post("/data",async(req,res)=>{

    console.log(req.body)
    
    const todo=await todoModel.create({
        todo:req.body.todo
    })

    res.json({
        message:"Todo saved",
        todo
    })
})

app.get("/data",async(req,res)=>{
    const todo= await todoModel.find()

    res.json({
        message:"Data sent",
        todo:todo
    })
})

app.delete("/data/:id",async(req,res)=>{
    const id=req.params.id

    const data=await todoModel.findByIdAndDelete(id)

    console.log(data)

    res.json({
        message:"data deleted"
    })

})

app.patch("/data/:id",async(req,res)=>{
    const id=req.params.id

    const data=await todoModel.findByIdAndUpdate(id,{todo:req.body.todo})

    console.log(data)

    res.json({
        message:"data updated"
    })

})

module.exports=app;