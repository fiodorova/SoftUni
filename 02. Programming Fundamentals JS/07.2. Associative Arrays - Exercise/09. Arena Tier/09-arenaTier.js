function arenaTier(input) {
  let result = {};
  for (let line of input) {
    if (line == "Ave Cesar") {
      break;
    }

    if (!line.includes("vs")) {
      let [name, tech, skill] = line.split(" -> ");
      skill = Number(skill);
      if (!result.hasOwnProperty(name)) {
        result[name] = {};
        result[name][tech] = skill;
      }

      if (!result.hasOwnProperty(tech)) {
        result[name][tech] = skill;
      } else {
        if (result[name][tech] < skill) {
          result[name][tech] = skill;
        }
      }
    } else {
      let [name1, name2] = line.split(" vs ");
      if (result.hasOwnProperty(name1) && result.hasOwnProperty(name2)) {
        let firstSkill = 0;
        for (const key in result[name2]) {
          if (result[name1].hasOwnProperty(key)) {
            firstSkill = result[name1][key];
          }
        }

        let secondSkill = 0;
        for (const key in result[name1]) {
          if (result[name2].hasOwnProperty(key)) {
            secondSkill = result[name2][key];
          }
        }

        if (firstSkill > 0 && secondSkill > 0) {
          if (firstSkill > secondSkill) {
            delete result[name2];
          } else {
            delete result[name1];
          }
        }
      }
    }
  }

  let totalSkills = {};
  let names = Object.keys(result);
  for (let name of names) {
    let sum = 0;
    for (const tech in result[name]) {
      sum += result[name][tech];
    }

    totalSkills[name] = sum;
  }

  let totalSkillsSorted = Object.entries(totalSkills).sort(
    (a, b) => b[1] - a[1]
  );

  for (let index = 0; index < totalSkillsSorted.length; index++) {
    console.log(
      `${totalSkillsSorted[index][0]}: ${totalSkillsSorted[index][1]} skill`
    );
    let techSorted = Object.entries(result[totalSkillsSorted[index][0]]).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
    for (const [tech, skill] of techSorted) {
      console.log(`- ${tech} <!> ${skill}`);
    }
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
console.log("---");
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
