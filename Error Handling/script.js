const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log("hello coder! All doing well.");
    next();
})

app.use((req, res, next)=>{
    console.log("Yes, All doing well.");
    next();
})

app.get('/', function (req,res) {
    res.send('This is main routes Page.')
})

app.get('/about', (req, res, next)=>{
    return next(new Error('somethings went wrong'));
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Somethings broke!')
})

app.listen(3000);