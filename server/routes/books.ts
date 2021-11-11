//Book router
//Author: Ngoc Phuong Uyen Ho
//Student ID: 301103427
//Web App: Favourite Book List

// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

// define the book model
import book from '../Models/books';

/* GET books List page. READ */
router.get('/', (req, res, next) => 
{
  // find all books in the books collection
  book.find( (err, books) => {
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

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let emptyBook = new book
     ({
      "Question": "",
      "OptionA": "",
      "OptionB": "",
      "OptionC": "",
      "OptionD": ""
    });
    res.render('books/details', {title: 'Add Question', page:'Add Question', books: emptyBook})

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     let newBook = new book
     ({
      "Question": req.body.question,
      "OptionA": req.body.optionA,
      "OptionB": req.body.optionB,
      "OptionC": req.body.optionC,
      "OptionD": req.body.optionD
     });
     
     book.create(newBook, (err) => {
       if(err)
       {
         console.error(err);
         res.end(err);
       }
        
       //refresh the book list
       res.redirect('/books');
     });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

     let id = req.params.id;
 
     book.findById(id, {}, {}, (err, bookToEdit) => 
     {
         if(err)
         {
             console.error(err);
             res.end(err);
         }
 
         // show the edit view
         res.render('./books/details.ejs', { title: 'Edit Question', page: 'Edit Question', books: bookToEdit});
     });
 });

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;
    let updatedBook = new book
    ({
      "_id": id,
      "Question": req.body.question,
      "OptionA": req.body.optionA,
      "OptionB": req.body.optionB,
      "OptionC": req.body.optionC,
      "OptionD": req.body.optionD
    });
  
    // find the books via db.books.update({"_id":id}) and then update
    book.updateOne({_id: id}, updatedBook, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
      
      //refresh the book list
      res.redirect('/books');
    });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;

     book.remove({_id: id}, (err) => {
       if(err)
       {
         console.error(err);
         res.end(err);
       }

       //refresh the book list
       res.redirect('/books');
     });
});


//module.exports = router;
