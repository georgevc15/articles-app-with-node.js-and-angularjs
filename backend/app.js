const express = require('express')
const app = express()


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
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});



module.exports = app;
