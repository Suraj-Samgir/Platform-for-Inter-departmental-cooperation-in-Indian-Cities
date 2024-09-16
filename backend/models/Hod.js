const mongoose = require('mongoose');

const HodSchema = new mongoose.Schema({
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
        required: true,
        maxLength: 10
    },
    address: {
        type: String,
        required: true,
        maxLength: 30
    }
});

const HodModel = mongoose.model("hod", HodSchema);

module.exports = HodModel;
