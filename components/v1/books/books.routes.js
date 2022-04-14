const express = require('express');
const requestLogger = require('../../../middlewares/request.log');
const router = express.Router();

const BooksController = require('./books.controller');

router.get('/', requestLogger, async (req, res) => {
    const data = await BooksController.getBooks(req);
    res.status(200).json({
        data: data
    });
});

router.get('/:book_id', async (req, res) => {
    const data = await BooksController.getBook(req);
    if (!data) {
        res.status(404).json({
            message: 'Book not found'
        });
    } else {
        res.status(200).json({
            data: data
        });
    }
});

router.post('/', async(req, res) => {
    const data = await BooksController.createBook(req);

    res.status(201).json({
        data: data
    });
});

router.put('/:book_id', async(req, res) => {
    try {
        const data = await BooksController.updateBook(req);
        res.status(200).json({
            data: data
        });
    } catch(error) {
        res.status(error.status).json({
            message: error.message
        });
    }
});

router.patch('/:book_id', async(req, res) => {
    try {
        const data = await BooksController.updateBook(req);
        res.status(200).json({
            data: data
        });
    } catch(error) {
        res.status(error.status).json({
            message: error.message
        });
    }
});

router.delete('/:book_id', async(req, res) => {
    try {
        const data = await BooksController.deleteBook(req);
        let message = "";
        if (data) {
            message = "Book deleted successfully";
        } else {
            message = "Error occured while deleting book";
        }
        res.status(200).json({
            data: message
        });
    } catch(error) {
        res.status(error.status).json({
            message: error.message
        });
    }
});

module.exports = router;