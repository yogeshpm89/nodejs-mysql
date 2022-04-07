const Mysql = require('../../../utils/mysql.utils');
const Sequelize = require('sequelize');



class Model {
    
    Students;

    constructor() {
        this.init();        
    }

    async init() {
        const temp = await Mysql.getSequelize();
        this.Students = temp.define('students', {
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            address: Sequelize.STRING
        }, {
            underscored: true
        });
    }
}


module.exports = new Model();