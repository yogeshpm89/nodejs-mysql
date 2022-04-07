const Sequelize = require('sequelize');
const config = require('../config');

class MysqlUtils {
    sequelize;

    constructor() {
        // this.init();
    }

    async init() {
        return new Promise((resolve, reject) => {
            try {
                this.sequelize = new Sequelize(
                    config.MYSQL.DATABASE, 
                    config.MYSQL.USERNAME, 
                    config.MYSQL.PASSWORD, 
                    {
                        host: config.MYSQL.HOST,
                        dialect: 'mysql',
                        pool: {
                            max: 5,
                            min: 0,
                            idle: 10000
                        },
                    }
                );
                console.log('database initialized....');
                resolve();
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    async getSequelize() {
        if (!this.sequelize) {
            await this.init();
        }
        return this.sequelize;
    }

}

module.exports = new MysqlUtils();