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