const express = require('express')
const  router = express.Router()
const Task = require('../modles/task')
////////////////////////////////////////
router.get('/tasks',async(req ,res)=>{
    try{
        const tasks = await task.find()
        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
///////////////////////////////////////////
router.post ('/tasks',async(req , res)=>{
    try{
        const task = new Task(req.body)
        await task.save()
         res.status(200).json({message :"Added successfull!" ,task})
    }catch(err){
       res.status(400).json({error:err.message})
    }
})
/////////////////////////////////////////////////
router.put('/tasks/:id', async(req ,res)=>{
    try{
        const {id} = req.params
        const taskUpdate = req.body
        const task = await Task.findByIdAndDelete(id ,taskUpdate,{new:true})
        res.status(200).json({message:"update successfull!",task})
    }catch(err){
       res.status(400).json({error:err.message})
    }
})
//////////////////////////////////////
 router.delete('/tasks/:id', async(req ,res)=>{
    try{
        const {id} = req.params
        await Task.findByIdAndDelete(id)
        res.status(200).json({message:"delete successfull!"})
    }catch(err){
       res.status(400).json({error:err.message})
    }
 })


module.exports = router