describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        const pet = {
            name: "Fido"
        };
            expect(pet.name).toEqual("Fido");
    });

    it("pet has initial age of 0", () => {
        const pet = new Pet ("Fido");
        function Pet(name) {
            this.name = name;
            this.age = 0;
        }
            expect(pet.age).toEqual(0);
    });
});

describe("growUp", () => {
    it("increments Fido's age by 1", () => {
        const pet = new Pet ("Fido");

        function Pet(name) {
            this.name = name;
            this.age = 0;
            this.growUp = function() {
                this.age += 1;
            };
        }

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it("increments Rex's age by 5", () => {
        const pet = new Pet ("Rex");

        function Pet(name) {
            this.name = name;
            this.age = 0;
            this.growUp = function() {
                this.age += 5;
            };
        }

            pet.growUp();

            expect(pet.age).toEqual(5);
    });
});


function Pet () {}
module.exports = Pet;