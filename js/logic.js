// Get the current year for the footer
let currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


// set up dark mode toggle
const modeToggle = document.getElementById("moon-icon");
const modeContainer = document.getElementById("mode-container");
const laptopIcon = document.querySelector(".laptop-icon");


function removeDarkMode() {
        modeContainer.classList.add("light");
        modeContainer.classList.remove("dark");
        // change the icon
        modeToggle.classList.remove("fa-regular");
        modeToggle.classList.add("fa-solid");

        // swap light laptop image to dark
        laptopIcon.src = "./assets/images/laptop-icon.png";

        // send current mode to local storage
        localStorage.setItem("mode", "light");
}

function addDarkMode() {
        modeContainer.classList.add("dark");
        modeContainer.classList.remove("light");        
        // change the icon
        modeToggle.classList.remove("fa-solid");
        modeToggle.classList.add("fa-regular");

        // swap dark laptop image to light
        laptopIcon.src = "./assets/images/laptop-icon-light.png"; 

        // send current mode to local storage
        localStorage.setItem("mode", "dark");
}

function getCurrentMode() {
    const currentMode = localStorage.getItem("mode");
    return currentMode;
}   

function setCurrentMode(currentMode) {
    if (currentMode === "dark") {
        addDarkMode();
    } else {
        removeDarkMode();
    }
}

let currentMode = getCurrentMode();
setCurrentMode(currentMode);

console.log(currentMode);

// add event listener to mode toggle
modeToggle.addEventListener("click", function() {
    // get the current mode
    getCurrentMode();
        if (!currentMode || currentMode === "light") {
          addDarkMode();
    } else {
        removeDarkMode();
    }
});