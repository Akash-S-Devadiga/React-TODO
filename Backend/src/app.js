const express=require('express');
const todoModel=require('./models/todo.model')
const app=express();

app.use(express.json())

const cors=require('cors')
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

module.exports=app;