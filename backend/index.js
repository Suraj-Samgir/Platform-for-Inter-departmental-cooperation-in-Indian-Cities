const express = require('express');
const path = require('path');
const methodOverride = require("method-override");
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dept = require('./models/Departments')
const Emp = require('./models/Employee')
const Hod = require("./models/Hod")
const Project = require("./models/Projects")
const Machinary = require("./models/Machinary")

// parsing the post requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: 'http://localhost:3000', // Ensure the frontend's URL is correct
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true  // If you're dealing with cookies, authentication
}));



// Method override 
app.use(methodOverride("_method"));



// -------- Mongoose -------- //

main()
.then((res) => {
    console.log("Connection successful!");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/centralized_DB");
}


// -------- Express --------- //

// port number
let port = 8080;

// listening on this port
app.listen(port, () => {
    console.log("Server is Listening");
})

app.get('/',(req, res) => {

    let data1 = new Project({
        name: "Saurabh",
        dept: "Water",
        startDate: new Date(),
        endDate: new Date(),
        cost: 78,
        desc: "this is a new project",
        location: "Pune",
        exactAddr: "KP new Conrad",
        status: "in-progress"
    });

    let data2 = new Project({
        name: "Neha",
        dept: "Road",
        startDate: new Date(),
        endDate: new Date(),
        cost: 88,
        desc: "this is a new project",
        location: "Pune",
        exactAddr: "Katraj new Iscon",
        status: "in-progress"
    });

    data1.save().then(() => {
        console.log("Saved");
    }).catch(() => { 
        console.log("Error");
    })

    data2.save().then(() => {
        console.log("Saved");
    }).catch(() => { 
        console.log("Error");
    })

    res.send("h")
})

// Login - Authenticate and return person(emp or hod)
app.post('/login', async (req, res) => {
    const { name, pass } = req.body;

    try {
        // Attempt to find the employee by name
        const emp = await Emp.findOne({ name: name });
        // Attempt to find the HOD by name
        const hod = await Hod.findOne({ name: name });

        if (emp) {
            // If employee found, check the password
            if (pass === emp.password) {
                return res.send("Employee");
            } else {
                console.log("Incorrect password for Employee");
                return res.status(401).send("Invalid credentials");
            }
        } else if (hod) {
            // If HOD found, check the password
            if (pass === hod.password) {
                return res.send("Hod");
            } else {
                console.log("Incorrect password for Hod");
                return res.status(401).send("Invalid credentials");
            }
        } else {
            console.log("User not found");
            return res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error during login process:", error);
        return res.status(500).send("Internal Server Error");
    }
});


// Emergency - Render projects status
app.get('/emergency',(req, res) => {
    
})

// Emergency - Write the emergency by HOD
app.post('/emergency', (req, res) => {

})

// Complain Box - Take complain, add to DB and return
app.post('/complain',(req,res) => {

})

// Alerts - Fetch Alerts and return
app.get('/alert',(req, res) => {

})

// Projects - Fetch projects and return
app.get('/project',(req, res) => {

})

// Get the data from body and add to DB
app.post('/project',(req, res) => {
    let {name, desc, dept, cost, startDate, endDate, location, exactAddr, status} = req.body;
    console.log(req.body);
    let data = new Project({
        name: name,
        dept: dept,
        startDate: startDate,
        endDate: endDate,
        cost: cost,
        desc: desc,
        location: location,
        exactAddr: exactAddr,
        status: status
    });

    data.save().then(() => {
        console.log("Saved");
    }).catch(() => { 
        console.log("Error");
    })
})

// Complain - get the complains from DB and return
app.get('/complain', (req, res) => {

})