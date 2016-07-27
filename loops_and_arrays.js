var name = ["John", "Jacob", "Jingle", "Hiemer", "Schmit"];

for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

name.push("Thom");

for (var x = 0; x < name.length; x++) {
    console.log(name[x]);
}

var whatever = ["Jeremy", true, 312];

for (var x = 0; x < whatever.length; x++) {
    console.log(whatever[x]);
}

var i = 0;

while (i < 10) {
  console.log("Iterration : " + i);
  i++;
}

var i = 1

do {
  console.log("Iteration : " + i);
  i++;
}

while (i < 11);

whatever.splice(0,2);
console.log(whatever);
