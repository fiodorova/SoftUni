function pascalCase(text) {
  let result = [];
  let currWord = "";
  let lower = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (text[i] != lower[i]) {
      if (currWord.length > 0) {
        result.push(currWord);
      }
      currWord = text[i];
    } else {
      currWord += text[i];
    }
  }

  if (currWord.length > 0) {
    result.push(currWord);
  }

  console.log(result.join(", "));
}

pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCase("HoldTheDoor");
pascalCase("ThisIsSoAnnoyingToDo");
