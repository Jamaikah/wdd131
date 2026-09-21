document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windspeed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windspeed, 0.16)) + (0.3695 * temp * Math.pow(windspeed, 0.16));
}

function displayWindChill() {
    const temperature = 30;
    const windspeed = 12;

    if (temperature <= 10 && windspeed > 4.8) {
        const windChill = calculateWindChill(temperature, windspeed);

        document.getElementById('wind-chill').textContent = `${windChill.toFixed(1)} ℃`;
    } else {
        document.getElementById('wind-chill').textContent = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', displayWindChill);
