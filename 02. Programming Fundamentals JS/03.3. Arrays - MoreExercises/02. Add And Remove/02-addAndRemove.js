function addAndRemove(array) {
  let num = 1;
  let result = [];

  for (let index = 0; index < array.length; index++) {
    let command = array[index];
    if (command === "add") {
      result.push(index + 1);
    } else if (command === "remove") {
      result.pop();
    }
  }

  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
