import {WeatherData} from "./WeatherData";
import {Iterator} from "./Iterator";


export class CityNameIterator implements Iterator<WeatherData> {
    private weatherData: WeatherData[];
    private index: number = -1;


    constructor(collection: WeatherData[]) {
        this.weatherData = collection;
    }


    public current(): WeatherData {
        return this.weatherData[this.index];
    }


    public advance() :void{
       this.index++;
    }

    public hasNext(): boolean {
        return this.weatherData[this.index+1]!==undefined;
    }

}