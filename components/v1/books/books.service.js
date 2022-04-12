const BookModel = require('./books.model');
const ErrorUtils = require('../../../utils/error.utils');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class BookService {

    async getBooks(param) {
        const where = {};
        if (param.name) {
            where.name = {
                [Op.like]: `%${param.name}%`
            };
        }
        const data = await BookModel.Book.findAll({
            where: where
        });
        return data;
    }

    async getBook(book_id) {
        const data = await BookModel.Book.findOne({
            where: {
                id: book_id
            }
        });
        return data;
    }

    async createBook(payload) {
        const data = await BookModel.Book.create(payload);
        return data;
    }

    async updateBook(book_id, payload) {
        const book = await this.getBook(book_id);
        if (!book) throw ErrorUtils.BOOKS.NOT_FOUND;
        await BookModel.Book.update(payload, {
            where: {
                id: book_id
            }
        });
        const data = await this.getBook(book_id);
        return data;
    }

    async deleteBook(book_id) {
        const book = await this.getBook(book_id);
        if (!book) throw ErrorUtils.BOOKS.NOT_FOUND;
        await BookModel.Book.destroy({
            where: {
                id: book_id
            }
        });
        return true;
    }
}

module.exports = new BookService();