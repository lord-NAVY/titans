/* book.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 31 October, 2021
Web app name: COMP229-F2021-MidTerm-301174738
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