// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

// window.addEventListener("load", function() {
//     const button = document.getElementById("formSubmit");
//     button.addEventListener("click", function(event){
//         event.preventDefault();
//         let pilot = document.querySelector("input[name=pilotName]");
//         let copilot = document.querySelector("input[name=copilotName]");
//         let fuelLevel = document.querySelector("input[name=fuelLevel]");
//         let cargoLevel = document.querySelector("input[name=cargoMass]");
//         let list = document.getElementById('faultyItems');

//         formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
//     });
    
//Add an event handler for the window load event
window.addEventListener("load", function() {

    // TASK 2
    //Within the window’s load handler, add an event handler for the form submit event
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        //prevent the form submission from happening until all inputs have valid values
        event.preventDefault();

        //Retrieve input values that need to be validated from the DOM.
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        //Make sure to call your formSubmission() function at the appropriate time in your script.js file!
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    listedPlanets = myFetch();
    let listedPlanetsResponse = listedPlanets;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
    
 });