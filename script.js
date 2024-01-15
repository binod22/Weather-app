const apikey = "e12eb5abf2a24be4a54164040241501";
const apiurl = "http://api.weatherapi.com/v1/current.json?q=London&aqi=no";
async function checkWeather(){
    const response = await fetch(apiurl+`key=${apikey}`);
}
