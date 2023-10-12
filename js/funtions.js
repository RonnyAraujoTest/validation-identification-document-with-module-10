function validateWithModule10() {
  let cedula = 40200346993;

  let array_cedula = cedula.toString().split("");

  let digitValid = Number.parseInt(array_cedula.pop());

  let digit_pair = [];
  let digit_odd = [];

  for (let i = 1; i <= array_cedula.length; i++) {
    if (i % 2 == 0) digit_pair.push(array_cedula[i - 1] * 2);
    else digit_odd.push(array_cedula[i - 1]);
  }

  return { digit_pair, digit_odd };
}

const reduceToOneDigit = (num) => {
  if (num < 10) return num;

  let digits = num.toString().split("");

  digits = digits.map((item) => {
    return Number.parseInt(item);
  });

  console.log(digits.reduce());
};

// console.log(validateWithModule10());
reduceToOneDigit(11);
