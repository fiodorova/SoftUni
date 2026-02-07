function squareOfStars(n) {
  if (n == undefined) {
    n = 5;
  }

  let line;
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 1; j <= n; j++) {
      line += "* ";
    }
    console.log(line);
  }
}

squareOfStars(8);
