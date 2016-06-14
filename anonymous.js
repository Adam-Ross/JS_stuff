// // Storing functions inside of variables.
//
// var x = function test() {
//   alert("sample");
// }
//
// x();
//
// // ------------------
//
// // In this case, we can use anonymous functions, becasue naming it test is kind of redundent.
//
// var x = function() {
//   alert("This is an anonymous function.")
// }
//
// x();
//
// // ------------------
//
// // You can also send in arguments to the anon function
//
// var x = function(arg1) {
//   alert("This is an anonymous function. " + arg1)
// }
//
// x(5);
//
// // ------------------
//
// // You can also send functions into other functions.
//
// function test(f, arg1) {
//   f(4);
// }
//
// test(
//   function(x){
//     alert('sample from anon function within test function. ' + x);
//   },
//   20
// );
//
// // ------------------

// You can also add many arguments to the anon function.

// function test(f, arg1) {
//   f(4 + arg1); // ----- > second argument added to function.
// }
//
// test(
//   function(x){
//     alert('sample from anon function within test function. ' + x);
//   },
//   20 // -----> arg1
// );

// can also return functions.

// var hi = function(type)
// {
//   if (type === "boss")
//     return function(name) {
//       alert(name + " You're a boss");
//     };
//   else
//     return function(name) {
//       alert(name + ", you know you're not a boss.")
//     };
// };
//
// var returnedFunction = hi("asshole");
//
// returnedFunction("Garrett");

var hi = function(type)
{
  if (type === "boss")
    return function(name) {
      alert("Hey " + name + ", you're a boss");
    };
  else
    return function(name) {
      alert("No way that you are a boss, " + name);
    };
};

returnedFunction = hi("asshole");
returnedFunction("Garrett");
