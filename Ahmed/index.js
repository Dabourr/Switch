let grade = prompt("Enter your grade please");
grade = Number(grade);

switch (true) {
  case grade < 0 || grade > 100:
    console.log("Invalid grade");
    break;
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 65:
    console.log("C");
    break;
  case grade >= 50:
    console.log("D");
    break;
  default:
    console.log("F");
}
