const express=require('express')
const { model } = require('mongoose')
const router=express.Router()
const noteController=require('../controllers/noteController')

router.route('/')
  .get(noteController.getAllNotes) //read
  .post(noteController.createNewNote)//create
  .patch(noteController.updateNote)//update
  .delete(noteController.deleteNote)//delete

  module.exports=router
