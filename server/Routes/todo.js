const express = require('express');
const Todo = require('../Models/Todo')
const mongoose = require('mongoose');
const router = express.Router();

router.get('/todoget', async (req, res)=>{
    try{
        const allTodos = await Todo.find({ userName: req.userName});
        res.status(200).json({
            status:"success",
            allTodos
        })
    } catch(err){
            console.log(err);
        }
})

router.post('/addtodo', async (req, res)=>{
    try{
        const allTodos = await Todo.create({ ...req.body, userName: req.userName});
        res.status(200).json({
            status:"success",
            allTodos
        })
    } catch(err){
            console.log(err);
        }
})
