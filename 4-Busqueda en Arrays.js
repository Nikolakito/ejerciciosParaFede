let lista = ["nanana", "antipala", "matilabura"];
function terminanEnA(words) {
  let veredicto = true;
  for (let word of words) {
    if (!word.endsWith("a")) {
      veredicto = false;
    }
  }
  console.log(veredicto);
}
terminanEnA(lista);
