function updateTime() {
    const now = new Date();

    // Update clock
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', timeOptions);

    // Update date
    const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', dateOptions);
}

// Initial call and interval setup
updateTime();
setInterval(updateTime, 1000);

// Rotate news items
const newsList = document.getElementById('news-list');
const newsItems = [
    "Breaking: Major event happening today",
    "Update: Local traffic conditions are clear",
    "Reminder: Upcoming holiday schedule next week",
    "Notice: System maintenance scheduled for midnight",
    "Welcome: Thanks for visiting our facility",
    "Alert: Please verify your parking validation",
    "Info: New café opening on the 2nd floor"
];

let newsIndex = 0;

function rotateNews() {
    // Basic array rotation to show 3 items at a time
    newsList.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const idx = (newsIndex + i) % newsItems.length;
        const li = document.createElement('li');
        li.textContent = newsItems[idx];
        newsList.appendChild(li);
    }

    newsIndex = (newsIndex + 1) % newsItems.length;
}

// Rotate news every 8 seconds
setInterval(rotateNews, 8000);
rotateNews();
