class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    set attack(distance) {
        this._attack = 100 * (1 - (distance - 1) / 10);
    }

    get attack() {
        return this._attack;
    }
};

//1 = 100% (100 - 0)
//2 = 90% (100 - 10)
//3 = 80% (100 - 20)
//4 = 70% (100 - 30)
//5 = 60% (100 - 40)

const wizard = new Character('Gandalf');

wizard.attack = 2;

console.log(wizard.attack);