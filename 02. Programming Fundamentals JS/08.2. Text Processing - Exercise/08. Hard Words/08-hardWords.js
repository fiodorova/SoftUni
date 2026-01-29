function hardWords(input) {
  let text = input[0].split(" ");
  let words = input[1];
  let result = [];

  for (let token of text) {
    if (token.includes("_")) {
      for (let word of words) {
        if (token[token.length - 1] !== "_") {
          let newWord = token.substring(0, token.length - 1);
          let sign = token.substring(token.length - 1);
          if (newWord.length == word.length) {
            word += sign;
            result.push(word);
          }
        } else if (token.length == word.length) {
          result.push(word);
        }
      }
    } else {
      result.push(token);
    }
  }

  console.log(result.join(" "));
}

hardWords(["Hi, _______!", ["grandma"]]);

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
