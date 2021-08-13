// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require('express');
var bodyParser = require('body-parser');

// Start up an instance of app
var app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
var cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));



// Setup Server
const port = 1800;

//const server = app.listen(port, () => {console.log(`server is listening on port: ${port}`); 
const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) 
});


// Return Endpoint Data
// GET Route I: Server Side
// There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
app.get('/', function (req, res) {
    res.send('hello world');
  })
// POST
// You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
// The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}

// // POST method route
app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});