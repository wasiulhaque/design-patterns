import loadJSON from "./loadJson";
import {WeatherData} from "./Iterator/WeatherData";
import {WeatherDataCollection} from "./Iterator/WeatherDataCollection";

const weatherDataCollection = new WeatherDataCollection();

addCity("Dhaka");
addCity("Chittagong");
addCity("Rajshahi");
addCity("Khulna");
addCity("Barishal");
addCity("Sylhet");
addCity("Mymensingh");
addCity("Faridpur");

function addCity(cityName:string){
    loadJSON(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+`&appid=3b98c1efb1de79defa3112df7481c1b0`).then(data=>{
        var celciusTemp = (data.main.temp - 273);
        celciusTemp = 100 * celciusTemp;
        celciusTemp = Math.floor(celciusTemp);
        celciusTemp = celciusTemp / 100;
        weatherDataCollection.addItem(new WeatherData(data.name,celciusTemp));
    })
}

const iterator = weatherDataCollection.getIterator();
setTimeout(()=>{
    while (iterator.hasNext()){
        iterator.advance();
        const data = iterator.current();
        console.log(data.name + ": " + data.temperature + "ºC");
    }
},2000)