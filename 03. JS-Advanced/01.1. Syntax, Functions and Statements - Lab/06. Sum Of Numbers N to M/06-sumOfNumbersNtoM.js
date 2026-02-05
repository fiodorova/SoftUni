function sumOfNumbersNtoM(n, m) {
  let n1 = Number(n);
  let n2 = Number(m);
  let sum = 0;

  for (let i = n1; i <= n2; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbersNtoM("1", "5");
sumOfNumbersNtoM("-8", "20");
