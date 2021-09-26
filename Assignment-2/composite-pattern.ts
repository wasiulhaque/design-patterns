export interface Component {
    singleClick():string;
    doubleClick():string;
}

export class Files implements Component{
    name:string;
    type:string;

    constructor(name:string, type:string){
        this.name = name;
        this.type = type;
    }

    doubleClick(): string {
        return `${this.name}.${this.type} file is opened.`;
    }


    singleClick(): string {
        return `Name: ${this.name}, Type: ${this.type}.`;
    }

}

export class Folders implements Component{
    list:Component[] = [];
    name:string;
    type:string;

    constructor(name:string, type:string) {
        this.name = name;
        this.type = type;
    }
    

     public singleClick(): string {
        return `Name: ${this.name}, Type: ${this.type}.`;
    }

    public doubleClick():string {
        let result = []
        result.push(`${this.name} folder is opened.${'\n'}Contents:`)
        for(const item of this.list){

            result.push(item.singleClick())
        }
        return `${result.join('\n')}`;
    }


    public addItem(component: Component):void{
        this.list.push(component);
    }

    public remove(component: Component): void{
        this.list.splice(this.list.indexOf(component), 1);
    }

}