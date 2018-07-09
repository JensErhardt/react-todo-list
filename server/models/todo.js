const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema ({
    text: { type: String},
    _owner: { mongoose.Schema }
});

module.exports = mongoose.model('Todo', todoSchema);