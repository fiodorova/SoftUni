function repainting(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hours = Number(input[3]);

  let sumMaterials =
    (nylon + 2) * 1.5 + (paint + paint * 0.1) * 14.5 + thinner * 5 + 0.4;
  let masterPrice = sumMaterials * 0.3 * hours;
  let totalPrice = sumMaterials + masterPrice;
  console.log(totalPrice);
}

repainting(["10", "11", "4", "8"]);
