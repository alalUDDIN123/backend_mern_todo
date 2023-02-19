const mongoose=require("mongoose");

const TodoSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
},{
    versionKey:false
})

const todoModel= mongoose.model("todo",TodoSchema);

module.exports=todoModel