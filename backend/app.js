const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const constants = require('./constants');

const Post = require('./models/post');

const app = express();

let mongoDBPass = constants.appPasswords.MONGO_DB_PASSWOPRD;
mongoose.connect('mongodb+srv://georgevc15:'+mongoDBPass+'@cluster0-96lzh.mongodb.net/articles-app?retryWrites=true')
      .then(()=> {
        console.log('Conected to database');
      })
      .catch(() => {
        console.log('Connection failed');
      });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(result => {
    res.status(201).json({
      message: 'Post added succesfully',
      postId: createdPost._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find()
   .then(documents => {
     console.log(documents);
     res.status(200).json({
      message: 'Posts fetched successfully!',
      posts: documents
     });
   });
});

app.delete("/api/posts/:id", (req, res, next) => {
    console.log(req.params.id);
    Post.deleteOne({_id: req.params.id}).then(result => {
      console.log(result);
      res.status(200).json({message: 'Post deleted'});
    });
});

module.exports = app;
