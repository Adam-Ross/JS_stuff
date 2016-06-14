// Functions - function is simply a block of code that can be executed as many times as need be
// by us or other people.



//
// function test() {
//   return 'This is returned'
// };
//
// var a = test();
//
// alert(a);
// alert(test());


function div(x, y)
{
  if (y === 0)
    return "You can't do that by zero.";
    
    return x / y;
}
var divOfVar = div(72, 2)
alert(divOfVar);
