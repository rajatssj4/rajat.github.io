function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Setting cookies for segmentation
if (!getCookie("userType")) {
    setCookie("userType", "newVisitor", 7); // Set cookie for new visitors
} else {
    setCookie("userType", "returningVisitor", 7); // Update cookie for returning visitors
}

// Additional segmentation cookies
if (!getCookie("preferredLanguage")) {
    setCookie("preferredLanguage", "English", 7); // Set default preferred language
}

if (!getCookie("theme")) {
    setCookie("theme", "light", 7); // Set default theme
}

if (!getCookie("location")) {
    setCookie("location", "unknown", 7); // Set default location
}

if (!getCookie("pagesVisited")) {
    setCookie("pagesVisited", "0", 7); // Set default pages visited
}

if (!getCookie("lastVisit")) {
    setCookie("lastVisit", new Date().toISOString(), 7); // Set last visit time
}

if (!getCookie("sessionCount")) {
    setCookie("sessionCount", "1", 7); // Initialize session count
} else {
    var sessionCount = parseInt(getCookie("sessionCount"));
    setCookie("sessionCount", sessionCount + 1, 7); // Increment session count
}

// Segmentation logic
var userType = getCookie("userType");
var preferredLanguage = getCookie("preferredLanguage");
var theme = getCookie("theme");
var location = getCookie("location");
var pagesVisited = parseInt(getCookie("pagesVisited"));
var lastVisit = getCookie("lastVisit");
var sessionCount = getCookie("sessionCount");

if (userType === "newVisitor") {
    console.log("Welcome, new visitor!");
} else if (userType === "returningVisitor") {
    console.log("Welcome back, returning visitor!");
}

if (preferredLanguage === "English") {
    console.log("Displaying content in English.");
}

if (theme === "dark") {
    console.log("Dark theme enabled.");
} else {
    console.log("Light theme enabled.");
}

if (location === "unknown") {
    console.log("Location not set.");
} else {
    console.log("Location: " + location);
}

console.log("Pages visited: " + pagesVisited);
console.log("Last visit: " + lastVisit);
console.log("Session count: " + sessionCount);
