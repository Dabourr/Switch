let deg = +prompt("ادخل درجتك");

switch (true) {
  case deg >= 0 && deg < 50:
    document.write("بلح");
    break;

  case deg >= 50 && deg < 65:
    document.write("يعني شغال ");
    break;

  case deg >= 65 && deg < 75:
    document.write("جامد");
    break;

  case deg >= 75 && deg < 85:
    document.write("حلو والله ");
    break;

  case deg >= 85 && deg <= 100:
    document.write("ابويا والله ");
    break;

  default:
    document.write("غلط يا معلم");
}