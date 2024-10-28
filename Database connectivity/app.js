const express = require('express');
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res)=>{
    res.send('Hey');
})

app.get("/create", async (req, res)=>{
    let createdUser = await userModel.create({
        name: "Prateek",
        username: "Prateek@2001",
        email: "Prateekkhandelwal353@gmail.com"
    },
    {
        name: "P",
        username: "P2001",
        email: "P353@gmail.com"
    }
)

    res.send(createdUser);
})

app.get("/update", async (req, res)=>{
    let updatedUser = await userModel.findOneAndUpdate({name: "Prateek"}, {name: "Prateek Khandelwal"}, {new: true})

    res.send(updatedUser);
})

app.get("/read", async (req, res)=>{
    let readUser = await userModel.find();

    res.send(readUser);
})

app.get("/delete", async (req, res)=>{
    let deletedUser = await userModel.findOneAndDelete({name: "Prateek"});

    res.send(deletedUser);
})

app.listen('3000');