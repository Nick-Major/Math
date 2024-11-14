import { Character } from "./character.js";

export class Magician extends Character {
    constructor(name) {
        super(name);
        this.type = 'magician';
        this.attack = 100;
    }
}

let wizard = new Magician('Gandalf');

console.log(wizard);
