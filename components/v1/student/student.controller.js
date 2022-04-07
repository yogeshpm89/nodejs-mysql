const StudentService = require('./student.service');

class Controller {

    async getAll(req, res) {
        return await StudentService.getAll();
    }

    async create(params) {
        return await StudentService.create(params);
    }

}

module.exports = new Controller();