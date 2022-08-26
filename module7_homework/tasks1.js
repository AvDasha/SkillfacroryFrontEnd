/*Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/


const person = {
    name : "Darya",
    age: "28",
    city: "Moscow"
}
const student = Object.create(person);
student.owrCity =  "Taganrog" ;

function func(obj){
   for (let key in obj){
    if ( student.hasOwnProperty(key))
  console.log(`${key} - ${obj[key]}`);
}
}

func( student);// "owrCity - Taganrog"
