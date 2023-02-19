const todoModel = require("../model/todo.model")

// creating todo 👍👍👍

const createTodo = async (req, res) => {
    const todo = new todoModel(req.body);
    try {
        const newTodo = await todo.save();
        res.status(201).send({ msg: "Todo created success", todos: newTodo })
    } catch (error) {
        res.status(500).send({ err: "Internel server error", error: error })
    }
}

const getTodo = async (req, res) => {
    const todos = await todoModel.find();

    if (todos.length === 0) {
        return res.status(404).send({ msg: "Todo not found in the database" })
    }

    try {
       res.status(200).send({todos:todos}) 
    } catch (error) {
        res.status(500).send({ err: "Someting went wrong in the server", error: error })  
    }


}

const updateTodo= async(req,res)=>{
    const id= req.params.id;
    const findTodo= await todoModel.findOne({_id:id})

    if (!findTodo) {
        return res.status(404).send({ msg: `Todo not found in the database with id : ${id}` })
    }

    try {
      await todoModel.findByIdAndUpdate({_id:id}, req.body)
      res.status(200).send({msg:`Todo updated success with id : ${id}`})
    } catch (error) {
        res.status(500).send({ err: "Someting went wrong in the server", error: error })  
    }
}

const deleteTodo= async(req,res)=>{
    const id= req.params.id;
    const findTodo= await todoModel.findOne({_id:id})

    if (!findTodo) {
        return res.status(404).send({ msg: `Todo not found in the database with id : ${id}` })
    }

    try {
      await todoModel.findByIdAndDelete({_id:id})
      res.status(200).send({msg:`Todo deleted success with id : ${id}`})
    } catch (error) {
        res.status(500).send({ err: "Someting went wrong in the server", error: error })  
    }
}

module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}