function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.fork = false;
}


ElectricalAppliance.prototype.forkin = function() {
    this.fork = true
    console.log(this.name + 'Прибор включен')
};


ElectricalAppliance.prototype.unfork = function() {
    this.fork = false
    console.log(this.name + 'Прибор выключен')
};


function Periphery(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.fork = true;
}

Periphery.prototype = new ElectricalAppliance();


function LargeMechanical(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.fork = false;
}

LargeMechanical.prototype = new ElectricalAppliance();

const tablePrinter = new Periphery("Принтер лазерный", "HP", 500, "Laser");

const electricStove = new LargeMechanical("Плита электрическая", "Gorenje", 800, "electrical", "техника для кухни");

console.log(tablePrinter)
console.log(electricStove)