export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.distance = 1;
        this.stoned = false;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        let attack = this._attack * (1 - (this.distance - 1) / 10);

        if(this.stoned) {
            return Math.round(attack - Math.log2(this.distance) * 5);
        };

        return attack;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }
};
