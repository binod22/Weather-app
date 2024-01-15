const apikey = "e12eb5abf2a24be4a54164040241501";
const apiurl = "http://api.weatherapi.com/v1/current.json?aqi=no";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl+`&q=${city}&key=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c)+"°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity+" %";
    document.querySelector(".wind").innerHTML = data.current.wind_kph+" kph";
    if(data.current.condition.text=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.current.condition.text=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.current.condition.text=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.current.condition.text=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.current.condition.text=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.current.condition.text=="Snow"){
        weatherIcon.src="images/snow.png"
    }


}
searchBtn.addEventListener("click",() => {
checkWeather(searchBox.value);    
})
checkWeather();
