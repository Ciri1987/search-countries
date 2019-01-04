'use strict';


var url = 'https://restcountries.eu/rest/v1/name/'; //API
var countriesList = document.getElementById('countries'); // zmienna zawierająca listę krajów

document.getElementById('search').addEventListener('click', searchCountries); // kliknięcie w przycisk search powoduje wyszukanie kraju

function searchCountries() {
    var countryName = document.getElementById('country-name').value; //wartość wpisana przez usera przypisana do zmiennej
    if (!countryName.length) countryName = 'Poland'; //warunek sprawdzający, czy pole nie jest puste. Jeśli jest puste, wyświetl Poland
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList); //żądanie wyszukania
}

function showCountriesList(resp) {
    countriesList.innerHTML = ''; // funkcja czyszcząca listę krajów po poprzenim wyszukaniu
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
    });
}