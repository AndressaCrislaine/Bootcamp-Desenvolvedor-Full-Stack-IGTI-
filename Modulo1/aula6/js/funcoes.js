function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
  //Outra maneira de fazer
  //return a-b;
}

console.log(compareNumbers(2, 8));
console.log(compareNumbers(2, 2));
console.log(compareNumbers(9, 3));

function somatorio(inicio, fim) {
  var sum = 0;

  for (var c = inicio; c <= fim; c++) {
    sum += c;
  }
  return sum;
}

console.log(somatorio(1, 10));
