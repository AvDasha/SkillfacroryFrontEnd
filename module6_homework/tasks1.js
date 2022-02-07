const arr = [15, 34, "снег", 43, 9, 64653, 16, 0, "ночь", null];
let getSpecificNumberCount = function () {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !NaN) {
      if (arr[i] === 0) {
        zero += 1;
      } else if (arr[i] % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }
  console.log("Количество нечетных элементов: ", odd);
  console.log("Количество четных элементов: ", even);
  console.log("Количество нулей: ", zero);
};
getSpecificNumberCount();
