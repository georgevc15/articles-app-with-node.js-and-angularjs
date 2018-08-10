const express = require('express')
const app = express();
const bodyParser = require("body-parser");

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
});

app.use('/api/posts', (req, res, next) => {
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
