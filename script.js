// Wait for the DOM content to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is working!");

    // Select the buttons and message element by their IDs
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");

    // When the "Yes" button is clicked, display the message
    yesBtn.addEventListener("click", () => {
        message.classList.remove("hidden"); // Remove the "hidden" class to show the message
    });

    // When the "No" button is hovered over, move it to a random position
    noBtn.addEventListener("mouseover", () => {
        // Calculate a random position within the screen's boundaries
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

        // Apply the new position to the "No" button
        noBtn.style.left =`${x}px`;
        noBtn.style.top = `${y}px`;
    });
});