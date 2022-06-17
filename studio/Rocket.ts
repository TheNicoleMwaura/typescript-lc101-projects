
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]= [];
    astronauts: Astronaut[]= [];

    constructor(name: string, totalCapacityKg: number ){
        this.name = name;
        this.totalCapacityKg= totalCapacityKg;

    }

    sumMass(items: Payload[]):number {
        let totalSum: number = 0;
        for(let i=0; i<items.length; i++){
            totalSum += items[i].massKg;

        }
        return totalSum; 
    }

    currentMassKg(): number {
        let totalMassKg: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
            return totalMassKg;
        
    }

    canAdd(item: Payload):boolean{
        let massCheck: boolean = true;
​
        if(this.currentMassKg() + item.massKg > this.totalCapacityKg){
            massCheck = false;
​
        }
        return massCheck
​
    }

    addCargo(cargo: Cargo): boolean{
        let massCheck: boolean = this.canAdd(cargo);
        let add: boolean = true;

        if(massCheck === true){
            this.cargoItems.push(cargo);
            return add;

        }

        return add = false;
    }
    
    addAstronaut(astronaut: Astronaut): boolean{
        let massCheck: boolean = this.canAdd(astronaut);
        let add: boolean = true;

        if(massCheck === true){
            this.astronauts.push(astronaut);
            return add;

        }

        return add = false;

    }

 }