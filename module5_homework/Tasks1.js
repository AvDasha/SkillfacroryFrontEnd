let a = prompt("Введите число");
a = +a;
console.log(typeof a);
function even_or_odd(a) {
  return a % 2 === 0 ? "Чётное" : "Не чётное";
}
if ((a = +a)) {
  console.log(even_or_odd(a));
} else {
  console.log(isNaN(a));
  alert("Упс, кажется, вы ошиблись");
}
