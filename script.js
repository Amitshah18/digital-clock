function updateClock() {
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;

    // Update the date
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    document.getElementById("date").innerText = `${day}, ${month} ${date}, ${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
