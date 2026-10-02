import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/Todo")

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const todo = new Todo({
        title: "Hey First Todo",
        desc: "Description of Todo",
        isDone: false,
        days: Math.floor(Math.random() * 45) + 5
    })

    await todo.save();

    res.send(todo);
});

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)

    res.json({
        title: todo.title,
        desc: todo.desc
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});