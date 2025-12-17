function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;

  for (let currFight = 1; currFight <= lostFights; currFight++) {
    if (currFight % 2 === 0) {
      totalExpenses += helmetPrice;
    }

    if (currFight % 3 === 0) {
      totalExpenses += swordPrice;
    }

    if (currFight % 6 === 0) {
      totalExpenses += shieldPrice;
    }

    if (currFight % 12 === 0) {
      totalExpenses += armorPrice;
    }
  }

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
