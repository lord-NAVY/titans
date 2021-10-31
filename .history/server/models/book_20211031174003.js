let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);