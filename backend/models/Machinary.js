const mongoose = require('mongoose');

const MachinarySchema = mongoose.Schema({
    dept: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Departments' 
    },
    Excavator: Number,
    Bulldozer: Number,
    Crane: Number,
    Paver: Number,
    Grader: Number,
    Roller: Number,
    Pipe_Locator: Number, 
    Trenchers: Number,
    Hydraulic_Pipe_Blender: Number, 
    Pumps: Number,
    Valve_Insertion_Tools: Number,
    Hydraulic_Jacks: Number, 
    Pipe_Cutter:Number,
    Pipe_Benders:Number,
    Piper_Inspection_Cameras:Number,
    Pipe_Welding_Machine:Number,
    High_Pressure_Jetters:Number,
    CCTV_Inspection_Systems:Number,
    Backhoes:Number,
    Gas_Leak_Detectors:Number,
    Road_Sweeper:Number,
    Concrete_Mixer:Number,
    Welders:Number,
    Front_Loaders:Number
});

const MachinaryModel = mongoose.model('machinery', MachinarySchema);

module.exports = MachinaryModel;