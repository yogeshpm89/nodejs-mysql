
const Model = require('./student.model');

class Service {
 
    async getAll() {
        const data =  await Model.Students.findAll();
        console.log(JSON.stringify(data, null, 2));
        return data;
    }

    async create(params) {
        const data = await Model.Students.create(params);
        return data;
    }
}

module.exports = new Service();