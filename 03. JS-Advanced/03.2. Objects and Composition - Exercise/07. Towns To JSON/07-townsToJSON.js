function townsToJSON(array) {
  let result = [];

  for (let i = 1; i < array.length; i++) {
    let line = array[i].split("|").filter((el) => el !== "");
    let town = line[0].trim();
    let latitude = Number(Number(line[1].trim()).toFixed(2));
    let longitude = Number(Number(line[2].trim()).toFixed(2));
    let obj = {
      Town: town,
      Latitude: latitude,
      Longitude: longitude,
    };
    result.push(obj);
  }

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
