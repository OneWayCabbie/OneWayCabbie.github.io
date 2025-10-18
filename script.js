// --- COUNTDOWN TIMER ---

// Set the date we're counting down to
// IMPORTANT: Change this to your actual launch date!
const launchDate = new Date("Feb 1, 2026 12:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Helper function to add leading zero
    const format = (num) => (num < 10 ? '0' + num : num);

    // Display the result
    document.getElementById("days").innerText = format(days);
    document.getElementById("hours").innerText = format(hours);
    document.getElementById("minutes").innerText = format(minutes);
    document.getElementById("seconds").innerText = format(seconds);

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h2>We've Launched!</h2>";
    }
}, 1000);