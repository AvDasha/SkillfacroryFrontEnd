function Num(a) {
  if (a >= 1000) {
    console.log("данные неверны");
  } else if (a % 2 == 0 || a % 3 == 0) {
    console.log(a + " - составное число");
  } else if (a == 1) {
    console.log("данные неверны");
  } else {
    console.log(a + " - простое число");
  }
}

Num(199);
