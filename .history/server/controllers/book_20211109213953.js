/* book.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 31 October, 2021
Web app name: COMP229-F2021-MidTerm-301174738
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/index', {title: 'Books', BookList: bookList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/details', {title: 'Add Book'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Genre": req.body.Genre,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Option1a": req.body.Option1a,
        "Option2a": req.body.Option2a,
        "Option3a": req.body.Option3a,
        "Option4a": req.body.Option4a,

        "Option1b": req.body.Option1a,
        "Option2b": req.body.Option2a,
        "Option3b": req.body.Option3a,
        "Option4b": req.body.Option4a,

        "Option1c": req.body.Option1a,
        "Option2c": req.body.Option2a,
        "Option3c": req.body.Option3a,
        "Option4c": req.body.Option4a,

        "Option1d": req.body.Option1a,
        "Option2d": req.body.Option2a,
        "Option3d": req.body.Option3a,
        "Option4d": req.body.Option4a,
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Genre": req.body.Genre,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Option1": req.body.Option1,
        "Option2": req.body.Option2,
        "Option3": req.body.Option3,
        "Option4": req.body.Option4
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/book-list');
        }
    });
}