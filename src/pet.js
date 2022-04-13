const maximumFitness = 10;
const fidoIsHungry = 3;
const minimumHunger = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.fitness = maximumFitness;
    this.hunger = 0;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function () {
    if(!this.isAlive) {
        throw new Error("Fido has passed away :(");
    }

    this.age += 1;
    this.fitness -= 3;
    this.hunger += 5;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error("Fido has passed away :(");
    }

    if ((this.fitness + 4) <= maximumFitness) {
      this.fitness += 4;
    } else {
      this.fitness = maximumFitness;
    }
};

Pet.prototype.feed = function () {
    if(!this.isAlive) {
        throw new Error("Fido has passed away :(");
    }

    if((this.hunger - fidoIsHungry) >= minimumHunger) {
        this.hunger -= fidoIsHungry;
    } else {
        this.hunger = minimumHunger;
    }
};

Pet.prototype.checkUp = function () {
    if(!this.isAlive) {
        return "Fido has passed away :(";
    }

    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk'
    } else if ((this.fitness <= 3)) {
        return 'I need a walk'
    } else if ((this.hunger >= 5)) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
};

Pet.prototype.haveBaby = function (name) {
    this.children.push(new Pet(name));
};



module.exports = Pet;
