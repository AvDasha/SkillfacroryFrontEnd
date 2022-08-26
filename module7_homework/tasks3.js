//Написать функцию, которая создает пустой объект, но без прототипа.

var func1 = () => {Object.create(null); console.log("Hello!");};
console.log(func1());
console.log("Лох");
let func2 = doMyWork;

var bb = 55;
console.log(bb);
bb = "Hello";
console.log(bb);

function addNumber(){
    let p = document.getElementById("count1").innerHTML;
    let number = 0;
    number = p == "" ? 0 : parseInt(p);

    number = number + 1;
    document.getElementById("count1").innerHTML = number;
}

function doMyWork(isLoh)
{
    let name = isLoh ? "Лох" : "Красавчик";

    let name2;
    if(isLoh == true){
        name2 = "Лох";
    }
    else
    {
        name2 = "красавчик";
    }

    Object.create(null);
    console.log(name);

    return name;
    return "Все лохи";
}

let getName = doMyWork(true);
let getName2 = doMyWork(false);

console.log(getName);
//console.log(getName2);

function sqroot(num)
{
    let dnum = num * 2;
    let result = dnum * dnum;
    return result;
    let c = 8;
    let a = 2;
    let b = a + 1;
    console.log("result = " + result);
    console.log("b = " + b);
    console.log("c = " + c);
}

let ff = sqroot(2);

let pppp;
console.log("pppp = " + pppp);

let a = 2;
let b = sqroot(3);


let dnum = a * 2;
let d = dnum * dnum;



