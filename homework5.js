class ElectricalAppliance {
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.fork = false;
    }
    
    forkin () {
        this.fork = true
        console.log(this.name + 'Прибор включен')
    }

    upfork () {
        this.fork = false
        console.log(this.name + 'Прибор выключен')
    }
}

class Periphery extends ElectricalAppliance {
    constructor (name, brand, power, type) {
        super(name, brand)
        this.power = power;
        this.type = type;
        this.fork = false;
    }
    
}

class LargeMechanical extends ElectricalAppliance {
    constructor (name, brand, power, type, functionality) {
        super(name, brand)
        this.power = power;
        this.type = type;
        this.functionality = functionality
        this.fork = false;
    }
}

const tablePrinter = new Periphery("Принтер лазерный", "HP", 500, "Laser");

const electricStove = new LargeMechanical("Плита электрическая", "Gorenje", 800, "electrical", "техника для кухни");

console.log(tablePrinter)
console.log(electricStove)