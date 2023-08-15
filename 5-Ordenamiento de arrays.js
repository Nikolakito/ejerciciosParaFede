let lista = [5, -10, -2, -25, -7];
function sortAbsoluteNumbers(numbers) {
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.abs(numbers[i]);
  }

  numbers.sort((a, b) => a - b);
  console.log(numbers);
}
sortAbsoluteNumbers(lista);
