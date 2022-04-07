const http = require('http');
const express = require('express');
const cors = require('cors');
const config = require('./config');
const appication = require('./package.json');
const routes = require('./routes');
const mysqlUtils = require('./utils/mysql.utils');
const app = express();

app.use(cors());
app.use(express.json( {  }));
app.use(routes)

const server = http.createServer({}, app);

const port = config.SERVER.PORT;
const init = async () => {
    if (process.env.MODE === "dev") {
        await mysqlUtils.init();
        server.listen(port, () => {
            console.log(`${appication.name} with version ${appication.version} running on port ${port}`);
        });
    }
}

init();
module.exports.server = server;