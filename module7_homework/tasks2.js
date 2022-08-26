// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


const lineObj = (str, object) => {
    return str in object;
 }
  
   
   let person = {
     name: 'Eva',
     surname: 'Ivanova',
     city: 'Piter'
 }
 
  console.log(lineObj('surname', person));
  console.log(lineObj('age', person));