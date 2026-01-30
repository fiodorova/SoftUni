function passGen(input) {
  let newString = input[0] + input[1];
  let word = input[2].toUpperCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let index = -1;
  for (let char of newString) {
    if (vowels.includes(char)) {
      index++;
      if (index >= word.length) {
        index = 0;
      }
      let newChar = word[index];
      newString = newString.replace(char, newChar);
    }
  }
  let password = newString.split("").reverse().join("")
  console.log(`Your generated password is ${password}`);
}

passGen(["ilovepizza", "ihatevegetables", "orange"]);
passGen(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passGen(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
