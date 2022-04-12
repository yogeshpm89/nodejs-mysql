const MysqlUtils = require('../../../utils/mysql.utils');
const Sequelize = require('sequelize');

class BookModel {

    Book;

    constructor() {
        this.init();
    }

    async init() {
        try {
            const mysql_sequalize = await MysqlUtils.getSequelize();
            this.Book = mysql_sequalize.define('books', {
                id: {
                    type: Sequelize.NUMBER,
                    primaryKey: true
                },
                name: Sequelize.STRING,
                author: Sequelize.STRING,
                price: Sequelize.NUMBER
            }, {
                underscored: true
            });
            console.log('BookModel initialized');
        } catch(error) {
            console.log('BookModel init error', error);
        }
    }
}

module.exports = new BookModel();