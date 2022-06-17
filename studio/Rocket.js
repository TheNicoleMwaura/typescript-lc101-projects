"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalSum = 0;
        for (var i = 0; i < items.length; i++) {
            totalSum += items[i].massKg;
        }
        return totalSum;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMassKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalMassKg;
    };
    Rocket.prototype.canAdd = function (item) {
        var massCheck = true;
        if (this.currentMassKg() + item.massKg > this.totalCapacityKg) {
            massCheck = false;
        }
        return massCheck;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var massCheck = this.canAdd(cargo);
        var add = true;
        if (massCheck === true) {
            this.cargoItems.push(cargo);
            return add;
        }
        return add = false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var massCheck = this.canAdd(astronaut);
        var add = true;
        if (massCheck === true) {
            this.astronauts.push(astronaut);
            return add;
        }
        return add = false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
