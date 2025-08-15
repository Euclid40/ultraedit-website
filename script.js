// Page load message
window.addEventListener("DOMContentLoaded", function () {
    console.log("UltraEdit download page loaded successfully!");
    alert("Welcome to the UltraEdit download page!");
});

// Track clicks on all download buttons
document.querySelectorAll(".button a").forEach(button => {
    button.addEventListener("click", function (e) {
        console.log(`Download started: ${this.textContent}`);
        // You could also send this info to analytics if needed
    });
});
