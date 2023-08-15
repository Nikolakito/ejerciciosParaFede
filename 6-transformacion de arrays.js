let palabritas = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

let jose = "pepito";

function buscaPalabras(words, word) {
  const posicionword = words.indexOf(word);

  const bigWords = words.filter((w) => w.length > posicionword);

  console.log(bigWords);
}
buscaPalabras(palabritas, jose);
