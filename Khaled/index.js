let deg = +prompt("ادخل درجتك");

switch (true) {
  case deg >= 0 && deg < 50:
    console.log("ساقط");
    break;

  case deg >= 50 && deg < 65:
    console.log("مقبول");
    break;

  case deg >= 65 && deg < 75:
    console.log("جيد");
    break;

  case deg >= 75 && deg < 85:
    console.log("جيد جدا");
    break;

  case deg >= 85 && deg <= 100:
    console.log("امتياز");
    break;

  default:
    console.log("الدرجه غلط");
}
