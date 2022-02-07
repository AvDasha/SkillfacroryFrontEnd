let res = false;
let arr = [0, 3, 3, 6, 4];
arr.forEach(function (item, index) {
  for (let i = index + 1; i < arr.length; i++) {
    if (item === arr[i]) res = true;
  }
});

console.log(res);
