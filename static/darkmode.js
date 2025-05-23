// function that is called when the page loads
// and sets the dark mode class to the body element

function callOnLoad() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// function that switches the dark mode class on and off
// when the button is clicked
function switchLighting(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}

window.onload = callOnLoad;
document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector('#switchLighting');
    if (el) {
        el.addEventListener("click", switchLighting);
    }
});