function travelTime(input) {
  let travel = {};

  for (let line of input) {
    let [country, town, cost] = line.split(" > ");
    if (!travel.hasOwnProperty(country)) {
      travel[country] = {};
    }

    if (!travel[country].hasOwnProperty(town)) {
      travel[country][town] = cost;
    }

    let currCost = travel[country][town];
    if (currCost > cost) {
      travel[country][town] = cost;
    }
  }

  let sorted = Object.entries(travel).sort((a, b) => a[0].localeCompare(b));
  let result = "";

  for (let [country, towns] of sorted) {
    result += country + " -> ";
    let sortedTown = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    for (let [town, cost] of sortedTown) {
      result += `${town} -> ${cost} `;
    }
    result += "\n";
  }
  console.log(result);
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
console.log("---");
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
