function furniture(input) {
  let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
  let furn = [];
  let total = 0;

  while (input[0] !== "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);

    if (match !== null) {
      let name = match.groups["name"];
      let price = match.groups["price"];
      let qty = match.groups["qty"];
      total += price * qty;
      furn.push(name);
    }
  }

  console.log(`Bought furniture:`);
 for (let item of furn) {
    console.log(item);
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
