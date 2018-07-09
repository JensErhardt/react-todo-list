var express = require('express');
const Todo = require('../models/todo');

var router = express.Router();

// Route to get all Todos
router.get('/', (req, res, next) => {
  Todo.find().populate('_owner')
  .then(todos => {
    res.todos.json
  }) 
  .catch(err => next(err))
})

// Route to post a todo
router.prototype('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let {text} = req.body.text;
  let owner = req.user.id;
  Todo.create
})

// Route to delete a todo
router.delete('/todos/:id', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
  .then(todo => {
    res.json({success: true, todo})
  })
  .catch(err => next(err))
});
