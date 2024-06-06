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

if (!getCookie("pagesVisited")) {
    setCookie("pagesVisited", "0", 7); // Set default pages visited
}

if (!getCookie("lastVisit")) {
    setCookie("lastVisit", new Date().toISOString(), 7); // Set last visit time
}

if (!getCookie("sessionCount")) {
    setCookie("sessionCount", "1", 7); // Initialize session count
} else if (!sessionStorage.getItem("sessionIncremented")) {
    var sessionCount = parseInt(getCookie("sessionCount"));
    setCookie("sessionCount", sessionCount + 1, 7); // Increment session count
    sessionStorage.setItem("sessionIncremented", "true");
}

// Segmentation logic
var userType = getCookie("userType");
var preferredLanguage = getCookie("preferredLanguage");
var theme = getCookie("theme");
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
    document.body.classList.add("dark-theme");
    console.log("Dark theme enabled.");
} else {
    document.body.classList.remove("dark-theme");
    console.log("Light theme enabled.");
}

console.log("Pages visited: " + pagesVisited);
console.log("Last visit: " + lastVisit);
console.log("Session count: " + sessionCount);

// Increment pages visited
setCookie("pagesVisited", pagesVisited + 1, 7);

// Theme toggle button
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Theme";
    toggleButton.onclick = function() {
        if (theme === "dark") {
            setCookie("theme", "light", 7);
            document.body.classList.remove("dark-theme");
            theme = "light";
        } else {
            setCookie("theme", "dark", 7);
            document.body.classList.add("dark-theme");
            theme = "dark";
        }
    };
    document.body.appendChild(toggleButton);
});
