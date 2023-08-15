let lista = [2, 45, 789, 1000];

function sumarPares(numeros) {
  let suma = 0;
  for (let numero of numeros) {
    if (numero % 2 == 0) {
      suma = suma + numero;
    }
  }
  console.log(suma);
}
sumarPares(lista);
