// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}
//add an alert to notify the user that all fields are required
//add an alert to make sure that the user entered valid infor for each of the fields
//pilot and co-pilot names should be strings
//fuel level and cargo mass should be numbers
//validateInput() in scripthelper.js
//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number"
//https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation
//Make sure to call your formSubmission() function at the appropriate time in your script.js file
//If you want to check if something is NaN, you cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN

function validateInput(testInput) {

    if (testInput === "" || testInput === null || testInput === 0) {
        return "Empty";
    } else if (isNaN(Number(testInput)) === true) {
        return "Not a number";
    } else if (isNaN(Number(testInput)) === false) {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // window.addEventListener("load", function() {
    //    let form = document.querySelector("form");
    //    form.addEventListener("submit", function(event) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");


    let fuelStatus = document.querySelector("fuelStatus");
    let cargoStatus = document.querySelector("cargoStatus");
    //let list = document.querySelector();

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel
    ) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("ALL fields are REQUIRED");
        // stop the form submission
        //          event.preventDefault();
    }

    if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        alert("Names must be STRINGS");
    }
    //split up to see which one is not working
    if (validateInput(fuelLevel.value) === "Not a number"){
        alert("Fuel level must be a number");

    } 
    if(validateInput(cargoLevel.value) === "Not a number") {
        alert("Cargo mass must be a NUMBER");
        //            event.preventDefault();
        //              event.preventDefault();
    }

    //});
    //});

    // Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
           
    // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. 
    // The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.

    // If the user submits a cargo mass that is too large (more than 10,000 kilograms),
    //  change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.  
    //  The text of launchStatus should also change to "Shuttle not ready for launch"
    //  and the color should change to a particular shade of red, #C7254E or rgb(199, 37, 78).

    //  If the shuttle is ready to launch,
    //   change the text of launchStatus to a particular shade of green, #419F6A or rgb(65, 159, 106),
    //   and display "Shuttle is ready for launch"
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
