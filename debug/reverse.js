const args = process.argv.slice(2);
let result = '';

const reverse = (args) => {
  for (i = 0; i < args.length; i++) {
    let length = args[i].length;

    for (j = length - 1; j >= 0; j--) {
      let character = args[i][j];
      result += character;
    }
    result += '\n';
  }
  return result;
};
console.log(reverse(args));
