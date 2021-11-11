"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const books_1 = __importDefault(require("../Models/books"));
router.get('/', (req, res, next) => {
    books_1.default.find((err, books) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('books/index', {
                title: 'Books',
                page: 'books',
                books: books
            });
        }
    });
});
router.get('/add', (req, res, next) => {
    let emptyBook = new books_1.default({
        "title": "",
        "description": "",
        "price": "",
        "author": "",
        "genre": ""
    });
    res.render('books/details', { title: 'Add Book', page: 'Add Book', books: emptyBook });
});
router.post('/add', (req, res, next) => {
    let newBook = new books_1.default({
        "Question": req.body.question,
        "OptionA": req.body.optionA,
        "OptionB": req.body.optionB,
        "OptionC": req.body.optionC,
        "OptionD": req.body.optionD
    });
    books_1.default.create(newBook, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
});
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    books_1.default.findById(id, {}, {}, (err, bookToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('./books/details.ejs', { title: 'Edit Book', page: 'Edit Book', books: bookToEdit });
    });
});
router.post('/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedBook = new books_1.default({
        "_id": id,
        "Question": req.body.question,
        "OptionA": req.body.optionA,
        "OptionB": req.body.optionB,
        "OptionC": req.body.optionC,
        "OptionD": req.body.optionD
    });
    books_1.default.updateOne({ _id: id }, updatedBook, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
});
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    books_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
});
//# sourceMappingURL=books.js.map