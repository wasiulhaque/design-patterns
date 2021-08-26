import {CityNameIterator} from "./CityNameIterator";
import {WeatherData} from "./WeatherData";


export class WeatherDataCollection{
    private items: WeatherData[] = [];

    public getItems(): WeatherData[] {
        return this.items;
    }


    public addItem(item: WeatherData): void {
        this.items.push(item);
    }

    public getIterator(): CityNameIterator {
       return new CityNameIterator(this.items);
    }


}
