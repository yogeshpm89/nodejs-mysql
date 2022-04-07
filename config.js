const dotenv = require('dotenv');
dotenv.config();

class Config {

    APP_NAME = "Demo app";
    APP_ADDRESS = "India";

    MODE = process.env.MODE;
    
    SERVER = {
        PORT: process.env.PORT
    }

    MYSQL= {
        HOST: process.env.MYSQL_HOST,
        DATABASE: process.env.MYSQL_DATABASE, 
        USERNAME: process.env.MYSQL_USERNAME, 
        PASSWORD: process.env.MYSQL_PASSWORD,
    }

    LOG_FOLDER = process.env.LOG_FOLDER;
}

module.exports = new Config();