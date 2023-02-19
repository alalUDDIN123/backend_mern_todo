const express = require("express");
const {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo,

} = require("../controllers/todo.controller");
const fieldsValidator = require("../middleware/fieldAnalyzer.middleware");

const todoRouter = express.Router();

todoRouter.post("/add", fieldsValidator, createTodo)
todoRouter.get("/", getTodo)
todoRouter.patch("/update/:id", updateTodo)
todoRouter.delete("/delete/:id",deleteTodo)

module.exports = todoRouter;