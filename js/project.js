const projecten= [
    {
        id: 1,
        titel: "Smart Environment Dashboard",
        beschrijving: "Full-stack webapplicatie die real-time omgevingsdata (lucht, weer, sensoren) ophaalt via externe API's, opslaat in een SQL-database en visualiseert in een React-frontend.",
        technologie: "React",
        alleTechnologieen: "React, C#, SQL, REST API's",
        githubUrl: "https://github.com/nukebit/smart_environment",
        datum: "2026-09-09"
    },
    {
        id: 2,
        titel: "Hotel Simulatie 2D ",
        beschrijving: "Een objectgeoriënteerde 2D simulatie van een hotel ontwikkeld in Java met behulp van JSON-layoutconfiguraties. Gasten, personeel en gebeurtenissen worden dynamisch gesimuleerd.",
        technologie: "Java",
        alleTechnologieen: "Java, OOP, JSON, Git",
        githubUrl: "https://github.com/hhs-se-semester-2-onderwijs/klas-2-groep-1",
        datum: "2026-03-15"
    }
];

// hier komt functie om die project elment html dom te maken

function maakProjectKaart(project) {
    const article = document.createElement("article");
    article.classList.add("project-card");

    const header = document.createElement("h3");
    header.textContent = project.titel;

    const beschrijving = document.createElement("p");
    beschrijving.textContent = project.beschrijving;

    const technologie = document.createElement("p");
    const techbold = document.createElement("strong");
    techbold.textContent = "Technologie: ";
    technologie.appendChild(techbold);
    technologie.appendChild(document.createTextNode(project.alleTechnologieen));

    const link = document.createElement("a");
    link.href = project.githubUrl;
    //verzorg dat je link in ander tab opent
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Bekijk op GitHub";
    


    // hier voeg ik alles aan article
    article.appendChild(header);
    article.appendChild(beschrijving);
    article.appendChild(technologie);
    article.appendChild(link);
    return article;

}
// hier voeg ik alles aan de DOM render ik het dus opzetten in het body
function renderProjecten(projectenLijst) {
    const container = document.getElementById("project-lijst");
    container.innerHTML =""; // ik maak het leeg zodat ik niet dubbel render
    projectenLijst.forEach(project => {
        // container.appendChild(maakProjectKaart(project));
        const kaart = maakProjectKaart(project);
        container.appendChild(kaart);
    });
}
//De functie laten draaien zodra de pagina geladen is
document.addEventListener("DOMContentLoaded", () => {
    renderProjecten(projecten);
    //event listener voor de select dropdown sorteren
    const sorteerSelect = document.getElementById("sorteer-select");
    sorteerSelect.addEventListener("change", verwerkSorteerKeuze);
});

//drop down menu sorteer functie
function sorteerOpNaam(lijst) {
    //spread operator- kopie van de lijst maken zodat ik niet de originele lijst sorteer
    return[...lijst].sort((a, b) => a.titel.localeCompare(b.titel));
}

function sorteerOpDatum(lijst) {
    //spread operator
    return [...lijst].sort((a, b) => new Date(b.datum) - new Date(a.datum));
} 
//event listener voor de select dropdown filteren
function verwerkSorteerKeuze(event) {
    //hier haal ik de waarde van de select dropdown op
    const gekozenOptie = event.target.value;
    let gesorteerdeLijst;

    if (gekozenOptie === "datum") {
        gesorteerdeLijst = sorteerOpDatum(projecten);
    } else {
        gesorteerdeLijst = sorteerOpNaam(projecten);
    }

    renderProjecten(gesorteerdeLijst);
}