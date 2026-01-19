function catalogue(input) {
  let catalog = {};

  for (let line of input) {
    let [name, price] = line.split(" : ");
    catalog[name] = price;
  }

  let sorted = Object.keys(catalog);
  sorted.sort((a, b) => a.localeCompare(b));

  let prevLetter = sorted[0][0];

  console.log(prevLetter);

  for (let product of sorted) {
    let currLetter = product[0];

    if (currLetter === prevLetter) {
      console.log(`  ${product}: ${catalog[product]}`);
    } else {
      console.log(currLetter);
      console.log(`  ${product}: ${catalog[product]}`);
    }

    prevLetter = product[0];
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

console.log("---");
catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
