import { Character } from "./character.js";

export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.type = 'daemon';
        this.attack = 100;
    }
}

let devil = new Daemon('Lucifer');

console.log(devil);
