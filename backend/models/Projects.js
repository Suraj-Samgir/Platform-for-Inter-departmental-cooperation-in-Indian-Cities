const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    desc:  {
        type: String,
        required: true,
        maxLength: 100
    },
    location: {
        type: String,
        required: true
    },
    exactAddr: {
        type: String,
        required: true,
        maxLength: 30
    },
    status: {
        type: String,
        required: true
    }, //pending completed in-progress conflicted
});

const ProjectsModel = mongoose.model("projects", ProjectsSchema);

module.exports = ProjectsModel;
