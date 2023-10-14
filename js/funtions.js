function validateWithModule10(cedula) {
  // let array_cedula = cedula.toString().split("");
  console.log(cedula);
  let array_cedula = cedula.split("");

  let digitValid = Number.parseInt(array_cedula.pop());

  let bi_array = [[], []];

  // separa los numeros segun su indices pares e impares
  for (let i = 1; i <= array_cedula.length; i++) {
    if (i % 2 === 0) bi_array[0].push(array_cedula[i - 1] * 2);
    else bi_array[1].push(array_cedula[i - 1] * 1);
  }

  // simplifico los numeros mayores a 9 en los subconjunto
  bi_array = bi_array.map((subconjunto) =>
    subconjunto.map((item) => reduceToOneDigit(item))
  );

  // guarda las suma da cada sub conjuntos
  let array = bi_array.map((subconjunto) =>
    subconjunto.reduce((acumulator, currentValue) => acumulator + currentValue)
  );

  // suma del total de los sub conjuntos
  let result_array = array.reduce(
    (acumulator, currentValue) => acumulator + currentValue
  );

  let digit_generate = result_array % 10 == 0 ? 0 : 10 - (result_array % 10);

  return digit_generate === digitValid;
}

const reduceToOneDigit = (num) => {
  if (num < 10) return num;

  let digits = num.toString().split("");

  digits = digits.map((item) => {
    return Number.parseInt(item);
  });

  return digits.reduce((acumulator, currentValue) => acumulator + currentValue);
};

function handle() {
  window.validar.addEventListener("click", () => {
    let result = validateWithModule10(window.cedula.value);
    if (result) {
      window.feedback.classList.remove("invalidID");
      window.feedback.classList.add("validID");
      window.feedback.innerHTML = "Cedula Valida.";
    } else {
      window.feedback.classList.remove("validID");
      window.feedback.classList.add("invalidID");
      window.feedback.innerHTML = "Cedula Invalida.";
    }
  });
}

window.onload = (even) => {
  handle();
};
