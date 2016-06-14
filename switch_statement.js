// Better than conditionals.

dayOfWeek = 1;
switch(dayOfWeek)
{
  case 1:
    alert("Damn, it's monday.")
  case 2:
  case 3:
  case 4:
  case 5:
    alert("Work day");
    break;
  case 6:
  case 7:
    alert("Weekend");
    break;
  default:
    alert("This is not a day of the week");
}
