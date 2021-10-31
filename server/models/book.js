/* book.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 31 October, 2021
*/

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