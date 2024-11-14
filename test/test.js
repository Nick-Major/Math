import { Character } from "../src/character.js";
import { Daemon } from "../src/daemon.js";
import { Magician } from "../src/magician.js";

test ('A Daemon is an instance of a Character', ()=> {
    let result = Daemon.prototype instanceof Character;
    expect(result).toBe(true);
});

test ('A Magician is an instance of a Character', ()=> {
    let result = Magician.prototype instanceof Character;
    expect(result).toBe(true);
});

test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60]
])('Checking the installation of the Daemon attack', (distance, expected) => {
    let devil = new Daemon('Devil');
    devil.distance = distance;
    
    let result = devil.attack;

    expect(result).toBe(expected);
});

test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60]
])('Checking the installation of the Magician attack', (distance, expected) => {
    let wizard = new Magician('Oz');
    wizard.distance = distance;
    
    let result = wizard.attack;

    expect(result).toBe(expected);
});
