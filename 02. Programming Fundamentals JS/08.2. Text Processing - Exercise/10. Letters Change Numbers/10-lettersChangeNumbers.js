function lettersNumbers(text) {
  let codes = text.split(" ");
  let result = [];
  let firstLetter = "";
  let number = "";
  let lastLetter = "";
  for (let i = 0; i < codes.length; i++) {
    if (codes[i] == 0) {
      codes.splice(i, 1);
      i--;
    }
  }

  for (let code of codes) {
    firstLetter = code[0];
    for (let i = 1; i < code.length - 1; i++) {
      number += code[i];
    }
    lastLetter = code[code.length - 1];

    number = Number(number);
    let letter1Pos = firstLetter.toLocaleUpperCase().charCodeAt(0) - 64;
    let letter2Pos = lastLetter.toLocaleUpperCase().charCodeAt(0) - 64;

    if (firstLetter == firstLetter.toLocaleUpperCase()) {
      number = number / letter1Pos;
    } else {
      number = number * letter1Pos;
    }

    if (lastLetter == lastLetter.toLocaleUpperCase()) {
      number = number - letter2Pos;
    } else {
      number = number + letter2Pos;
    }

    result.push(number);
    number = "";
  }
  let sum = 0;
  for (let num of result) {
    sum += num;
  }
  console.log(sum.toFixed(2));
}

lettersNumbers("A12b s17G");
console.log("---");
lettersNumbers("P34562Z q2576f   H456z");
console.log("---");
lettersNumbers("a1A");
