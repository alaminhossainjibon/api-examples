const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
// function call data
loadCountries();
//countries gulu dekhanor jonno function
const displayCountries = countries => {
    //dekhar jonno console.log
    // console.log(countries);

    // country gulo payar jonno for loop
    // for (const country of countries) {
    //     console.log(country);
    // }

    //id ke niye asha
    const countriesDiv = document.getElementById('countries');

    // map diye dekhano.
    countries.forEach(country => {
        // console.log(country);
        // p add div diye
        const div = document.createElement('div');
        //class add kora hoyeche
        div.classList.add('country');
        //inner html diye kora hoyeche
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        /*
       //anny element creating
       const h3 = document.createElement('h3');
       h3.innerText = country.name.common;
       //dekhanor jonno
       div.appendChild(h3);
       // p add
       const p = document.createElement('p');
       p.innerText = country.capital;
       div.appendChild(p);
        */

        //full div ta ke countryDiv er mpdde deya hoyeche.
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    //country nam search kora
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
    // console.log(url);
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>population: ${country.population}</p>
    <img src="${country.flags.png}">
    `
}