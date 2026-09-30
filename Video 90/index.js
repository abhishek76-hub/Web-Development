const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require ("fs")

app.use(express.static("public"));
app.use('/blog', blog)

// Middlware 1 - logger for our application
app.use((req,res,next) =>{
  console.log(req.headers)
  req.text = "I am good";
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`);
    // res.send("Hacked by Middlware 1")
    next()
});

// Middlware 2
app.use((req,res,next) =>{
    console.log('m2')
    req.text = "I am good bhai";
    next()
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello World about!');
});

app.get('/contact', (req, res) => {
  res.send('Hello World contact!' + req.text);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});