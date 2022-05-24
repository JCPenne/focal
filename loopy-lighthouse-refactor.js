/* 
For each element in RANGE
loop through each element in MULTIPLES and check if the RANGE element is divisible by the MULTIPLES element
if it is, let the result variable equal the WORDS element that corresponds to the MULTIPLES element
*/
/* 
If Element is divisible by a Multiple, push the corresponding word into the result string and go to the next check.
*/
let result = '';
let checker = false;

const loopyLighthouse = (range, multiples, words) => {
  for (let element = range[0]; element <= range[1]; element++) {
    for (let divider = 0; divider < multiples.length; divider++) {
      if (element % multiples[divider] === 0) {
        result += words[divider];
        checker = true;
      }
    }
    if (checker) {
      console.log(`Checked number = ${element}, Result =  ${result}`);
      result = '';
      checker = false;
    } else {
      console.log(`Checker number = ${element}, Result = ${element}`);
    }
  }
};
loopyLighthouse([15, 30], [2, 5, 10], ['Two', 'Five', 'Ten']);
