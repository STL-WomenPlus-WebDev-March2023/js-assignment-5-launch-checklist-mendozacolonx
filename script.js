// Write your JavaScript code here!

window.addEventListener("load", function () {
    //launchForm wrong
    let form = document.querySelector("form");
    //Cannot read properties of null (reading 'addEventListener')????????
    //changed submit to formsubmit, did not work
    form.addEventListener("submit", function (event) {
        //forgot the most important part, the defualt
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
        //why sometimes cargo mss vs cargo level, confusing...
        let cargoLevel = Number(document.querySelector("input[name=cargoMass]").value);
        //do i need to do a let list yet?
        let list = document.querySelector("#faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        //TypeError: Cannot read properties of undefined (reading 'name')
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })

});