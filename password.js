const password = process.argv.slice(2).toString();

const obfuscate = function (input) {
  const arr = input.split('');
  let final = '';

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      final += 4;
    }
    if (arr[i] === 'e') {
      final += 3;
    }
    if (arr[i] === 'o') {
      final += 0;
    }
    if (arr[i] === 'l') {
      final += 1;
    } else {
      final += arr[i];
    }
  }
  console.log(final);
};
obfuscate(password);
