import Vehicle from "./Vehicle.js";


//this includes the vehicle class as a module
const VehicleModule = require("./Vehicle.js")

class Sedan extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100
        this.scheduleService = false
    }

    loadPassenger(passengers){
        if (this.Passenger < this.maxPassenger){
            console.log('ten passenger seating');
            return availableRoom == true;
        }
        else {
            console.log("2 seats availible")        
        }
    }

    scheduleServices(mileage) {
        if (this.mileage >= 30000){
            console.log("no service needed")
            return this.scheduleService == true;
        }
        else {
            console.log("service engine soon")
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("Engine on")
            return this.started == true;
        }
        else {
            console.log("Engine off")
            return this.started == false;
        }
    }
} 


class newTruck extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassenger = 4;
        this.passenger = 0;
        this.numberOfWheels = 8;
        this.maximumSpeed = 180;
        this.fuel = 100;
        this.scheduleService = false;
        this.towHitch = true;
    }
    loadPassenger(passengers){
        if (this.Passenger < this.maxPassenger){
            console.log('Ten passenger seating');
            return availableRoom == true;
        }
        else {
            console.log("2 seats availible")        
        }
    }

    scheduleServices(mileage) {
        if (this.mileage >= 30000){
            console.log("No service required")
            return this.scheduleService == true;
        }
        else {
            console.log("Service soon!")
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("Engine on")
            return this.started == true;
        }
        else {
            console.log("Engine off")
            return this.started == false;
        }
    }

    tow() {
        if(this.towHitch === true) {
            console.log("tow hitch availible");
        }
        else {
            console.log("No tow hitch");
        }

    }
}



//this shows how to call from this module...
let car = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let mercury = new Sedan("Mercury", "A28", "2007", "Purple", "32200")
console.log(mercury)

