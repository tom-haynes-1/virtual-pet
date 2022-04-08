const Pet = require('../src/pet');

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
});

    it("sets the name property", () => {
        const pet = new Pet("Fido");

        expect(pet.name).toEqual("Fido");
});

    it("pet has initial age of 0", () => {
        const pet = new Pet ("Fido");

        expect(pet.age).toEqual(0);
    });
});

describe("growUp", () => {
    it("increments Fido's age by 1", () => {
        const pet = new Pet ("Fido");

        pet.growUp();

        expect(pet.age).toEqual(1);
});

    it("increments Rex's age by 5", () => {
        const pet = new Pet ("Rex");

        for (let i = 0; i < 5; i++) {
            pet.growUp();
        }

        expect(pet.age).toEqual(5);
});

    it("Fido becomes hungrier by a factor of 5 and less fit by a factor of 3 as it gets older", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.fitness).toEqual(7);
        expect(pet.hunger).toEqual(5);
});

describe("Fido needs a walk", () => {
    it("increases fitness by 4", () => {
        const pet = new Pet("Fido");
    
        pet.fitness = 4;
        pet.walk();

    expect(pet.fitness).toEqual(8);
});

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
        });
    });
});

describe("Fido is hungry", () => {
    it("decreases Fido's hunger by a factor of 3", () => {
        const pet = new Pet("Fido");

        pet.hunger = 4;
        pet.feed();

        expect(pet.hunger).toEqual(1);

});

    it("Ensures that Fido's hunger level never falls below 0", () => {
        const pet = new Pet("Fido");

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
});

describe("checkUp", () => {
    it("return \"I am hungry\" if Fido's hunger level is 5 or more", () => {
        const pet = new Pet("Fido");

        pet.hunger = 7;
        pet.checkUp();

        expect(pet.checkUp()).toBe("I am hungry");
    });

    it("return \"I need a walk\" if Fido's fitness level falls below 3", () => {
        const pet = new Pet("Fido");

        pet.fitness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toBe("I need a walk");
    });

    it("return \"I am hungry AND I need a walk\" if Fido's fitness falls below 3 and hunger level is more than 5", () => {
        const pet = new Pet("Fido");

        pet.fitness = 0;
        pet.hunger = 9;
        pet.checkUp();

        expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });

    it("return \"I feel great!\" if Fido's fitness and hunger are at optimal levels", () => {
        const pet = new Pet("Fido");

        pet.fitness = 7;
        pet.hunger = 1;
        pet.checkUp();

        expect(pet.checkUp()).toBe("I feel great!");
        });
    });
});