const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: "Prateek",
        age: 23,
        email: "P@gmail.com"
    });

    res.send(user);
})

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postData: "Hello world",
        user: "673c7a3da0bfaa0604293fab",
    })

    let user = await userModel.findOne({_id: "673c7a3da0bfaa0604293fab"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);