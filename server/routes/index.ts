// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the book model
import book from '../Models/books';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    books: ''
   });
});

router.get('/create', (req, res, next) => {
  res.render('content/create', {
    title: 'Create A Survey',
    page: 'create',
    books: ''
   });
});

router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact Us',
    page: 'contact',
    books: ''
   });
});

//module.exports = router;
