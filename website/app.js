/* Global Variables */
const apikey = "8b2e2ace7c74f2124c371d00f8b5e0eb";
const url = "api.openweathermap.org/data/2.5/weather?zip=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear(); 

//
// eventListener for generate button
// Adds an event listener to an existing HTML button from DOM using Vanilla JS.


// code for button and functionality
// In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.

// GET 
// setting up routes 
// The API Key variable is passed as a parameter to fetch()
// Data is successfully returned from the external API.

// POST
// Return Endpoint Data
// GET Route II: Client Side
// There should be an asynchronous function to fetch the data from the app endpoint
// The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});
// Generates data onto site
// Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
// Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.
function postGet(){
  postData('/animal', {fav:'lion'})
    .then(function(data){
      retrieveData('/all')
    })
}

postGet()
