//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160
        this.fuel = 10;
        this.scheduleService = false;

        
    }

// loadPassenger - if passenger less than maximumPassengers then availableRoom 
    loadPassenger (num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger=num;
                return this.passenger
            } else {
                console.log("Out of room");
            }
        } else {
            console.log("Out of room");
        }
    }
// start - if fuel is greater than 0, then start == true
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
//scheduleService - if mileage is greater than 30000, time for maintenance == true
    schduleService () {
        if (this.mileage > 30,000) {
            this.schduleService = true
            return this.schduleService;
        }
        }
    }
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
