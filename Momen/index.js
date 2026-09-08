let deg = +prompt('Please enter your degree');

switch(true) {
    case (deg >= 0 && deg < 50):
        document.write('يا ساقط يا فاشل');
        break;
    case (deg >= 50 && deg < 65):
        document.write('مقبول');
        break;
    case (deg >= 65 && deg < 75):
        document.write('جيد');
        break;
    case (deg >= 75 && deg < 85):
        document.write('جيد جداً');
        break;
    case (deg >= 85 && deg <= 100):
        document.write('امتياز');
        break;
    default:
        document.write('ما تكتب رقم عدل يلا');
}