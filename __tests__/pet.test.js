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

describe("walk", () => {
    it("increases fitness by 4", () => {
        const pet = new Pet("Fido");
      
        pet.fitness = 4;
        pet.walk();
    
        expect(pet.fitness).toEqual(8);
        });

        it('increases fitness by to a maximum of 10', () => {
            const pet = new Pet('Fido');
        
            pet.fitness = 8;
            pet.walk();
        
            expect(pet.fitness).toEqual(10);
        });
    });
});