console.log(true == false);
console.log(true == true);

var amIcool = true;

if (amIcool) {
  console.log("This had better print.");
}

if (true == true) {
  console.log("This is true.");
} else if (true != true) {
  console.log("We should not see this line.");
} else {
  console.log("Why would be ever get here?!?!?!");
}

var val1 = "6";
var val2 = 6;

if (val1 === val2) {
  console.log("The two are equal");
} else {
  console.log("The two are not equal.");
}
