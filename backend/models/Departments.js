const mongoose = require('mongoose');

const DepartmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hodId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Hod' 
    }
});

const  DepartmentsModel = mongoose.model("departments", DepartmentsSchema);

module.exports =  DepartmentsModel;
