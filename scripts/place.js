// const temperature = parseFloat(document.querySelector(".temperature"));
// const windSpeed = parseFloat(document.querySelector(".wind"));

const temperature = parseFloat(29);
const windSpeed = parseFloat(20);
const chill = document.querySelector(".chill");
const temp = Math.floor(temperature * (9 / 5) + 32);




function calculateWindChill(temp, windSpeed) {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));

        if (windChill > 0) {
                chill.innerHTML = `${windChill.toFixed(2)}°F`;
        } else {
                return chill.innerHTML = `N/A`;
        }
        console.log(windChill);
}

