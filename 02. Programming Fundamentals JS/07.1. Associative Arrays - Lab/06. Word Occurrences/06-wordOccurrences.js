function wordOccur(input) {
  let words = new Map();

  for (let text of input) {
    if (!words.has(text)) {
      words.set(text, 1);
    } else {
      let count = words.get(text);
      count++;
      words.set(text, count);
    }
  }

  let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);

  for (let [word, occurs] of sorted) {
    console.log(`${word} -> ${occurs} times`);
  }
}

wordOccur([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
console.log("---");
wordOccur(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
