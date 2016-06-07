// Why use bind.

// Alex Brown's
this.car = "Honda Civic W/ ugly spoiler.";

var garrettsGarage = {
  car: "Expensive car",
  getCar: function() {
    return this.car;
  }
};

console.log(garrettsGarage.getCar());

// Lets say we want to store the 'getCar' fuction for later.

var storeGetCarForLater = garrettsGarage.getCar;

// Now, work is over, want to get car.

console.log(storeGetCarForLater());

//var theRealGetCarForLater = storeGetCarForLater.bind (garrettsGarage);



// could also do it like this.

var theRealGetCar = garrettsGarage.getCar.bind(garrettsGarage);

console.log(theRealGetCar());
