const temp = 30; // You need to define temp and windSpeed
const windSpeed = 10;
const chill = document.querySelector(".chill");

function calculateWindChill(temp, windSpeed) {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));

        if (windChill > 0) {
                return windChill
        } else {
                return N / A;
        }
}

document.addEventListener("DOMContentLoaded", function () {

        const windChill = calculateWindChill(temp, windSpeed); // Calculate wind chill
        if (windChill !== "N/A") {
                chill.innerHTML = `${parseFloat(windChill).toFixed(2)}°F`; // Ensure it's a number before fixing decimals
        } else {
                chill.innerHTML = "N/A"; // Display "N/A" if wind chill is not applicable
        }
});









