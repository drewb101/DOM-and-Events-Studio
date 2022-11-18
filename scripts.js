// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("window loaded");

    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    let status = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketImage = document.getElementById("rocket");

    takeOffButton.addEventListener("click", function() {
    window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(true){
        status.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    }
});

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
});

abortButton.addEventListener("click", function() {
    window.confirm("Confirm that you want to abort the mission.");
    if(true){
        status.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
});

upButton.addEventListener("click", function() {
    rocketImage.style.objectPosition = "0px -10px";
});

downButton.addEventListener("click", function() {
    rocketImage.style.objectPosition = "0px 10px";
});

leftButton.addEventListener("click", function() {

});

rightButton.addEventListener("click", function() {

});














});


