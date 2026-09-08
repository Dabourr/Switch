let score = prompt("Enter your score");
score = Number(score);

if (score <= 100 && score >= 0) {
  let attendance = confirm("Do you have good attendance?");

  if (attendance == true) {
    score = score + 3;

    if (score > 100) {
      score = 100;
    }
  }

  let grade;

  switch (true) {
    case score < 50:
      grade = "F";
      break;

    case score < 65:
      grade = "D";
      break;

    case score < 80:
      grade = "C";
      break;

    case score < 90:
      grade = "B";
      break;

    default:
      grade = "A";
  }

  switch (score >= 50) {
    case true:
      console.log(
        "Your score is " +
          score +
          " --- " +
          "Your grade is " +
          grade +
          " --- " +
          "Status: PASS",
      );
      break;

    case false:
      console.log(
        "Your score is " +
          score +
          " --- " +
          "Your grade is " +
          grade +
          " --- " +
          "Status: FAIL",
      );
      break;
  }
} else {
  console.log("Enter a valid score");
}