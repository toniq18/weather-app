// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')


// Start up an instance of app
const app = express ();


/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const req = require('express/lib/request');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening)
function listening(){
    console.log('server running');
    console.log(`server is running on local host: ${port}`)
}


//get route 
app.get('/wthr', sendToEndpoint);

function sendToEndpoint (request, response){
    response.send(projectData)
    projectData = [];
}



//post route 
app.post('/add', addInfo);

function addInfo(request, response){
    let newInfo = {
        date: request.body.date,
        temp: request.body.temp,
        content: request.body.content
    }
    projectData.push(newInfo);
};

