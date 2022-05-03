let multiplicador: number;
let numFinal: number;

multiplicador = Number(prompt("Ingrese el multiplicador"));
numFinal = Number(prompt("Ingrese hasta que número quiere multiplicar"));

for (let contador: number = 1; contador <= numFinal; contador++) {
  console.log(
    multiplicador + " X " + contador + " = " + multiplicador * contador
  );
}
2;
