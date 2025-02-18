// Weather Data Fetcher and Logger

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'weather_log.txt');



// Function to log messages
function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Simulated weather data fetcher
function getWeatherData() {
    const temperature = (Math.random() * 15 + 10).toFixed(2); // Random temperature between 10-25°C
    const humidity = (Math.random() * 50 + 30).toFixed(2); // Random humidity between 30-80%
    const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Stormy'];
    const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    return `Temperature: ${temperature}°C, Humidity: ${humidity}%, Condition: ${condition}`;
}

// Function to fetch and log weather data
function logWeatherData() {
    const data = getWeatherData();
    logMessage(`Weather Data: ${data}`);
    console.log(`Weather Data: ${data}`);
}

// Schedule weather data logging
setInterval(logWeatherData, 5000); // Every 5 seconds

// Initial log message
logMessage('Weather Data Logger started.');
console.log('Weather Data Logger started.');

// Stop after 1 minute
setTimeout(() => {
    logMessage('Weather Data Logger stopped.');
    console.log('Weather Data Logger stopped.');
    process.exit(0);
}, 60000);
