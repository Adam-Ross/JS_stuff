// var person = {
//   name: "Jack",
//   age: 23,
//   speakName: function(aName) {
//     return "Hello " + aName;
//   }
// };
//
// console.log(person.name);
// console.log(person.age);
// console.log(person.speakName("John"));
//
// console.log(person["name"]);
//
// person.age += 5;
// console.log("Age: " + person.age);
//
// var Vehicle = function(make, color, premium) {
//   var self = this;
//   this.make = make;
//   this.odometer = 0;
//   this.engine = "V6";
//   this.color = color;
//
//   if (premium == true) {
//     this.engine = "V8";
//     this.color = "Platinum"
//   }
//
//   this.addTrip = function(newMiles) {
//     if (newMiles > 0) {
//       self.odometer += newMiles;
//     }
//   };
// };
//
// var benz = new Vehicle("Mercedez-Benz", "White", false);
// console.log("Color: " + benz.color);
// console.log("Odometer : " + benz.odometer);
//
// benz.addTrip(501);
//
// console.log("Odometer:" + benz.odometer);


// objects -- containers for storing functions (methods) and variables(Properties) thematically related to each other for
// ease of use.

var div = document.getElementById("test");

alert(div);

var person = {
  name: "Mike",
  height: "5'10",
  religion: "Jew",
  isAdult: function()
  {
    if (this.age < 18)
      return false;

      return true;
  },
  toString: function()
  {
    return this.name + " is " + this.height + " and is " + this.religion;
  }
};

person.age = 17;

div.innerHTML = person.toString();
alert(person.isAdult());
