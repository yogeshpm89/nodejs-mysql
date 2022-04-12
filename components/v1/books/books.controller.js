const BooksService = require('./books.service');

class BooksController {

    async getBooks(req) {
        const params = req.query;
        const data = await BooksService.getBooks(params);
        return data;
    }

    async getBook(req) {
        const book_id = req.params.book_id;
        const data = await BooksService.getBook(book_id);
        return data;
    }

    async createBook(req) {
        const payload = req.body;
        const data = await BooksService.createBook(payload);
        return data;
    }

    async updateBook(req) {
        const book_id = req.params.book_id;
        const payload = req.body;
        const data = await BooksService.updateBook(book_id, payload);
        return data;
    }

    async deleteBook(req) {
        const book_id = req.params.book_id;
        const data = await BooksService.deleteBook(book_id);
        return data;
    }
}

module.exports = new BooksController();