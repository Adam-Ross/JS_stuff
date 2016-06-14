// Scope of variables within the script / functions.
// Scope / (Range) means where the varible is available.

// function test()
// {
//   alert("sample"); // ----> Function has global scope.
// }
//
// test();

// Basically, functions can be invoked anywhere in the document //
// Varibles need to be invoked in order. //


// In this example, the varible a is going to change to the variable set in the function.

// var a = 5;
//
// function test() {
//   a = 3;
//   alert(a);
// }
//
// test();
//
// alert("a has now changed to " + a);

// To get around this problem, we use an argument for the function.

// var a = 5; // ======> Global scope
//
// function test() {
//   var a; // =======> Local variable
//   a = 6;
//   alert("The variable in the function is a = " + a);
// }
//
// test();
//
// alert("The variable outside the function is a = " + a);

// If you don't put the 'a' variable as an argument, or if you don't declare it within the
// function, it becomes a global varaible. This is assuming that you have removed the
// original 'var a = 5'.

function test2() {
  var a;
  a = 3
  alert(a);
}

test2();

alert(a);
