const form = document.querySelector('#contact-form');
//hier maak ik een array van velden die ik wil valideren
const velden = [
    {id: 'naam', boodschappen: 'Vul je naam in'},
    {id: 'email', boodschappen: 'Vul je email in'},
    {id: 'bericht', boodschappen: 'Vul je bericht in'}
];

//hier maak ik een functie die valideert of de velden geldig zijn
function valideertVeld(veld){
    const input = document.querySelector(`#${veld.id}`);
    const foutmelding = document.querySelector(`#${veld.id}-error`);
    //hier check ik of het veld geldig is
    const geldig = input.checkValidity();
    //hier zet ik de aria-invalid attribute op true of false afhankelijk van of het veld geldig is
    input.setAttribute('aria-invalid', String(!geldig));
    //hier zet ik de foutmelding textContent op de boodschap als het veld niet geldig is
    foutmelding.textContent = geldig ? '' : veld.boodschappen;
    return geldig;

} 

//hier voeg ik een event listener toe aan het form die de velden valideert bij submit
form.addEventListener('submit', (event) => {
    //hier voorkom ik dat het form verstuurd wordt
    event.preventDefault();
    //hier valideer ik alle velden en check of ze allemaal geldig zijn
    const alleGeldig = velden.map(valideertVeld).every(Boolean);
    const status = document.querySelector('#form-status');
    if (!alleGeldig) {
        status.textContent = 'Er zijn fouten in het formulier. Controleer de velden en probeer het opnieuw.';
        status.style.color = 'red';
        return;
    }
        status.textContent = 'Formulier succesvol verzonden!';
        status.style.color = 'green';
        form.reset();
});