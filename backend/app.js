const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const constants = require('./constants');

const Post = require('./models/post');

const app = express();

let mongoDBPass = constants.appPasswords.MONGO_DB_PASSWOPRD;
mongoose.connect('mongodb+srv://georgevc15:'+mongoDBPass+'@cluster0-96lzh.mongodb.net/test?retryWrites=true')
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
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '1',
      title: 'First post',
      content: 'This is coming from the server'
    },
    {
      id: '2',
      title: 'Second post',
      content: 'This is coming from the server 2!'
    },

  ];

  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});



module.exports = app;
