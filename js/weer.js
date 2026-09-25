// Zet weercode om naar leesbare tekst
function weerCodeNaarTekst(code) {
    if (code === 0) return "Helder";
    if (code <= 3) return "Bewolkt";
    if (code <= 48) return "Mist";
    if (code <= 67) return "Regen";
    if (code <= 77) return "Sneeuw";
    if (code <= 82) return "Buien";
    return "Onweer";
}

// Toont tekst in de statusregel (voor laden, fout, én resultaat)
function toonWeerStatus(tekst) {
    document.getElementById("weer-status").textContent = tekst;
}

// Haalt het weer op en toont het resultaat
function haalWeerOp(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const { temperature, weathercode } = data.current_weather;
            toonWeerStatus(`${weerCodeNaarTekst(weathercode)}, ${temperature}°C`);
        })
        .catch(() => toonWeerStatus("Weer kon niet worden opgehaald."));
}

// Vraagt locatie op en start het ophalen
document.addEventListener("DOMContentLoaded", () => {
    // Check of het element voor de weerstatus aanwezig is
    if (!document.getElementById("weer-status")) return;

    toonWeerStatus("Bezig met laden...");
// Check of geolocatie beschikbaar is
    if (!navigator.geolocation) {
        toonWeerStatus("Locatie wordt niet ondersteund door je browser.");
        return;
    }
    // Vraag om toestemming voor locatie en haal het weer op
    navigator.geolocation.getCurrentPosition(
        (positie) => haalWeerOp(positie.coords.latitude, positie.coords.longitude),
        () => toonWeerStatus("Locatietoestemming geweigerd.")
    );
});