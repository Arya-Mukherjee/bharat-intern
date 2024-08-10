const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bb683f3e25msh9b170f1ad3e15bep1a43e0jsn2311f0c2f658',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getWeather = (city) =>{

    cityname.innerHTML = city
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        temp_c.innerHTML = response.current.temp_c;
        temp_c2.innerHTML = response.current.temp_c;
        temp_f.innerHTML = response.current.temp_f;
        
        wind_mph.innerHTML = response.current.wind_mph;
        wind_kph.innerHTML = response.current.wind_kph;                    
        wind_kph2.innerHTML = response.current.wind_kph;                    
        wind_degree.innerHTML = response.current.wind_degree;
        wind_dir.innerHTML = response.current.wind_dir;
        precip_mm.innerHTML = response.current.precip_mm;
        humidity.innerHTML = response.current.humidity;
        humidity2.innerHTML = response.current.humidity;
        feelslike_c.innerHTML = response.current.feelslike_c;
        feelslike_f.innerHTML = response.current.feelslike_f;
        
        vis_km.innerHTML = response.current.vis_km
        uv.innerHTML = response.current.uv
        // gust_kph.innerHtml = response.current.gust_kph
    })
    .catch(err => console.error(err));
}

const getWeatherForOtherPlaces = (cities) => {
    cities.forEach(city => {
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById(`${city.toLowerCase()}_feelslike_c`).innerHTML = response.current.feelslike_c;
            document.getElementById(`${city.toLowerCase()}_gust_kph`).innerHTML = response.current.gust_kph;
            document.getElementById(`${city.toLowerCase()}_humidity`).innerHTML = response.current.humidity;
            document.getElementById(`${city.toLowerCase()}_temp_c`).innerHTML = response.current.temp_c;
            document.getElementById(`${city.toLowerCase()}_uv`).innerHTML = response.current.uv;
            document.getElementById(`${city.toLowerCase()}_vis_km`).innerHTML = response.current.vis_km;
            document.getElementById(`${city.toLowerCase()}_wind_dir`).innerHTML = response.current.wind_dir;
            document.getElementById(`${city.toLowerCase()}_wind_kph`).innerHTML = response.current.wind_kph;
        })
        .catch(err => console.error(err));
    });
}

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")
getWeatherForOtherPlaces(["Shanghai", "Boston", "Lucknow", "Dhaka"]);


