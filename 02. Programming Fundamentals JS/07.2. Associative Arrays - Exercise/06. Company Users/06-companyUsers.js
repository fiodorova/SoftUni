function companyUsers(input) {
  let users = {};

  for (let line of input) {
    let [company, user] = line.split(" -> ");

    if (users.hasOwnProperty(company) == false) {
      users[company] = new Set();
      users[company].add(user);
    } else {
      users[company].add(user);
    }
  }

  let sorted = Object.entries(users);
  sorted.sort();

  for (let [company, empl] of sorted) {
    console.log(company);
    let employeers = Array.from(empl);
    employeers.forEach((x) => console.log(`-- ${x}`));
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("---");
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
