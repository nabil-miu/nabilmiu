window.onload = function () {
    "use strict";

    // Get DOM elements
    const textArea = document.getElementById("text-area");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const turboCheckbox = document.getElementById("turbo");
    const animationDropdown = document.getElementById("animation");
    const fontSizeDropdown = document.getElementById("fontsize");

    // Initialize variables
    let duration = 250;
    let intervalId;
    let animation;
    let index = 0;
    let frames = [];

    // Set initial font size
    textArea.style.fontSize = fontSizeDropdown.value + "pt";

    // Start button event listener
    startButton.addEventListener("click", function () {
        // Get selected animation and split into frames
        animation = animationDropdown.value;
        frames = ANIMATIONS[animation].split("=====\n");
        // Start interval to change frames
        intervalId = setInterval(changeFrame, duration);
        // Disable start button and enable stop button
        startButton.disabled = true;
        stopButton.disabled = false;
    });


    // Font size dropdown event listener
    fontSizeDropdown.addEventListener("change", function () {
        // Change font size
        textArea.style.fontSize = fontSizeDropdown.value + "pt";
    });

    // Stop button event listener
    stopButton.addEventListener("click", function () {
        // Enable start button and disable stop button
        startButton.disabled = false;
        stopButton.disabled = true;
        // Clear interval
        clearInterval(intervalId);
        intervalId = null;
        // Reset text area value to original animation
        textArea.value = ANIMATIONS[animation];
    });

    // Turbo checkbox event listener
    turboCheckbox.addEventListener("change", function () {
        // Change duration based on checkbox state
        duration = turboCheckbox.checked ? 50 : 250;
    });

    // Animation dropdown event listener
    animationDropdown.addEventListener("change", function () {
        // Change text area value to selected animation
        textArea.value = ANIMATIONS[animationDropdown.value];
    });

    // Function to change frames
    function changeFrame() {
        // Set text area value to current frame
        textArea.value = frames[index];
        // Increment index or reset to 0 if end of frames is reached
        index = (index + 1) % frames.length;
    }
}