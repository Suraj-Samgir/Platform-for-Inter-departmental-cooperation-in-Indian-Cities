const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dept: {
        type: String, 
        required: true
    },
    projects: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Projects' 
        }],
    phoneNumber: {
        type: Number,
        maxLength: 10,
        required: true
    },
    address: {
        type: String,
        maxLength: 30,
        required: true
    }
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;
