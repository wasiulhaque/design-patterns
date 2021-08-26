"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadJson_1 = __importDefault(require("../loadJson"));
var WeatherData_1 = require("./WeatherData");
var WeatherDataCollection_1 = require("./WeatherDataCollection");
var weatherDataCollection = new WeatherDataCollection_1.WeatherDataCollection();
addCity("Dhaka");
addCity("Chittagong");
addCity("Rajshahi");
addCity("Khulna");
addCity("Barishal");
addCity("Sylhet");
addCity("Mymensingh");
addCity("Faridpur");
function addCity(cityName) {
    loadJson_1.default("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3b98c1efb1de79defa3112df7481c1b0").then(function (data) {
        var celciusTemp = (data.main.temp - 273);
        celciusTemp = 100 * celciusTemp;
        celciusTemp = Math.floor(celciusTemp);
        celciusTemp = celciusTemp / 100;
        weatherDataCollection.addItem(new WeatherData_1.WeatherData(data.name, celciusTemp));
    });
}
