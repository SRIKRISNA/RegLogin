const mongoose =  require("mongoose")

const todoSchema = new mongoose.Schema({
    activity:{
        type: String,
        required: true,
      },
    status:{
        type: String,
        required: true,
      },
      timeTaken:String,
      user:{
        type:Schema.Types.ObjectId,
         ref:'User'
      }
})

const todoModel = mongoose.model("todo",todoSchema)
module.exports = todoModel;