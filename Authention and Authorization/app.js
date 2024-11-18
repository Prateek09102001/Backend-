const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());//this is use (req.cookies)

app.get('/', (req, res) =>{
    res.cookie('name','Prateek');
    res.send('done');
})

app.get('/read', (req, res) =>{
    console.log(req.cookies);
    res.send('done');
})

// Encrypt password
app.get('/about',(req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("Prateek", salt, function(err, hash) {
            console.log(hash);
        })
    });
});

// Decryption password
app.get('/check',(req, res)=>{
    bcrypt.compare("Prateek", "$2b$10$LtfnQkcFpcHm2OXVUHrKpekyNq/7g.zkqEriLeHrbYV6RzZDKirPC", function (err, result) {
        console.log(result);
    })
})

// JWT - Json Web Token
app.get('/jwt', (req, res) =>{
    let token = jwt.sign({email: 'prateek09102001@gmail.com'}, 'secret');
    res.cookie("token", token);
    res.send("Done Bro");
})

app.get('/jwt/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);