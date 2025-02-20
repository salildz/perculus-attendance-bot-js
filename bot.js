// usage: run this script in the browser console of the perculus page
// This script will automatically click the attendance button every 2 seconds, you can change the interval by changing the value of the interval variable
// This script will keep running until you close the page or refresh it

const interval = 2; // interval in seconds for checking if the button exists
setInterval(() => {
    try {
        let element = document.getElementsByClassName("attendance-check-container")[0].getElementsByClassName("perculus-button-content")[0];
        element.click();
        console.log("Clicked the button");
    } catch (error) {
        console.log("Script is working - Button not found.");
    }
}, interval * 1000);