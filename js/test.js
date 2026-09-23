// let h1 = document.querySelector('h1');
// h1.textContent = "Ali is the top en de rest is photoshop 😎";
// h1.innerHTML = "<p> Ali </p> is the top en de rest is photoshop 😎";
// h1.style.color = "red";

// const p =document.createElement('p');
// p.textContent = "haaiii";

// document.body.appendChild(p);

// const producten = [
//     {
//         naam: "Product 1",
//         prijs: 10.99,
//         populariteit: 4.5
//     },
//     {
//         naam: "Product 2",
//         prijs: 15.99,
//         populariteit: 4.2
//     },
//     {
//         naam: "Product 3",
//         prijs: 7.99,
//         populariteit: 4.8
//     }, {
//         naam: "Product 4",
//         prijs: 10.99,
//         populariteit: 4.5
//     },
//     {
//         naam: "Product 5",
//         prijs: 15.99,
//         populariteit: 4.2
//     },
//     {
//         naam: "Product 6",
//         prijs: 7.99,
//         populariteit: 4.8
//     }
// ];

// producten.forEach(product => {
//     console.log(product.naam);
//     console.log(product.prijs);
//     console.log(product.populariteit);
//     producten.sort((a, b) => b.populariteit - a.populariteit);
//     console.log(producten);

//     //creat
//     const productDiv= document.createElement("div");
//     productDiv.classList.add("product");
//     productDiv.innerHTML = `
//         <h2>${product.naam}</h2>
//         <p>Prijs: $${product.prijs}</p>
//         <p>Populariteit: ${product.populariteit}</p>
        
//     `;
//     document.body.appendChild(productDiv);
// });


const form = document.querySelector('#contact-form');
const velden = [
    {id: 'naam', boodschappen: 'Vul je naam in'},
    {id: 'email', boodschappen: 'Vul je email in'},
    {id: 'bericht', boodschappen: 'Vul je bericht in'}
];

function valideertVeld(veld){
    const input = document.querySelector(`#${veld.id}`);
    const foutmelding = document.querySelector(`#${veld.id}-error`);
    const geldig = input.checkValidity();

    input.setAttribute('aria-invalid', String(!geldig));
    foutmelding.textContent = geldig ? '' : veld.boodschappen;
    return geldig;

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const alleGeldig = velden.map(valideertVeld).every(Boolean);
    const status = document.querySelector('#status');
    if (!alleGeldig) {
        status.textContent = 'Er zijn fouten in het formulier. Controleer de velden en probeer het opnieuw.';
        status.style.color = 'red';
        return;
    }
        status.textContent = 'Formulier succesvol verzonden!';
        status.style.color = 'green';
        form.reset();
});