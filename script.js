fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data.slice(0, 3)))
    .catch(error => console.log(error));

// Display the country cards on the page
function displayCountries(countries) {
    const countryRow = document.getElementById('countryRow');

    countries.forEach(country => {
        const { capital, latlng, flag, region, name, cca2 } = country;
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-sm-12');
        card.innerHTML = `
            <div class="card">
                <div class="card-header">${name.common}</div>
                <div class="card-body">
                  <img src="${country.flags.png}"style="width: 100px;">
                  <h4>Country code: ${country.cca3}</h4>
                  <h4>Regoin: ${country.region}</h4>
                  <h4>Capital: ${country.capital}</h4>
                    <button class="btn btn-primary" onclick="getWeather('${latlng[0]}', '${latlng[1]}')">Click for Weather</button>
                </div>
            </div>
        `;
        countryRow.appendChild(card);
    });
}

// Fetch the weather information using the OpenWeatherMap API
function getWeather(latitude, longitude) {
    const apiKey = 'b7be9eb0514bf9804baaeabd40f94193';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process and display the weather information as needed
            console.log(data);
        })
        .catch(error => console.log(error));
}