const maximumFitness = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.fitness = maximumFitness;
    this.hunger = 0;
};

Pet.prototype.growUp = function () {
    this.age +=1;

    if (this.age >= 1) {
        this.fitness = this.fitness - 3;
        this.hunger = this.hunger + 5;
    }
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= maximumFitness ) {
      this.fitness += 4;
    } else {
      this.fitness = maximumFitness;
    }
  }


module.exports = Pet;
