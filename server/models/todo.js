var mongoose = require('mongoose');

//define the types
var Todo = mongoose.model('Todo', {
    text: {
      type: String,
      require: true,
      minlength: 1,
      //remove the space.
      trim: true
  
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });
  
  module.exports = {
      Todo: Todo
  };