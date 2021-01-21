const weather = document.querySelector('.js-weather');
const API_KEY = '05b3728fcc8a0180d27ce08830a9a6d0';
const COORDS = 'coords'


function getweather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(response=>{
        return response.json()
    }).then(json => {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`
    })
}



function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}



function handleGeoSuccess(position){
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("CANOT")
}





function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords(){
    const loadedCoordes = localStorage.getItem(COORDS);
    if (loadedCoordes=== null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoordes);
        getweather(parseCoords.latitude, parseCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init();