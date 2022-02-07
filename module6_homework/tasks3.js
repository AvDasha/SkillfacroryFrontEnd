function firstFunc(a) {
  return function secondFunc(b) {
    return a + b;
  };
}
console.log(firstFunc(93)(2));
