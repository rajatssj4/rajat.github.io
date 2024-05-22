// Generate random boolean value
var randomBoolean = Math.random() >= 0.5;

// Generate random text value
var texts = ["Batman", "Bruce Wayne", "The Dark Knight", "Gotham", "Bat-Signal"];
var randomText = texts[Math.floor(Math.random() * texts.length)];

// Generate random number between 5 million to 50 million
var randomNumber = Math.floor(Math.random() * (50000000 - 5000000 + 1)) + 5000000;

// Display the random values on the website
document.getElementById("randomValues").innerHTML = 
    "Random Boolean: " + randomBoolean + "<br>" +
    "Random Text: " + randomText + "<br>" +
    "Random Number: " + randomNumber.toLocaleString();

console.log("Random Boolean:", randomBoolean);
console.log("Random Text:", randomText);
console.log("Random Number:", randomNumber);
