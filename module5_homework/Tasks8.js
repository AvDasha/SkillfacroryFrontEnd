let myMap = new Map();
myMap.set("peach", "9");
myMap.set("banana", "2");
myMap.set("apple", "4");
myMap.set("kiwi", "6");

myMap.forEach((values, keys) => {
  console.log(`Fruit - ${keys}, Quantity - ${values}`);
});
