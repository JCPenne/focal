const args = process.argv.slice(2);

const rollDice = function (args) {
  let result = "";
  for (i = 0; i < args; i++) {
    result += Math.floor(Math.random() * (7 - 0) + 0) + ",";
  }
  return result.slice(0, -1);
};

console.log(`Rolled ${args} dice: ${rollDice(args)}`);
