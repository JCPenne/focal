const args = process.argv.slice(2);

function sumOfNum(args) {
  let result = 0;
  for (i in args) {
    result += Number(args[i]);
  }
  return result;
}
console.log(sumOfNum(args));
