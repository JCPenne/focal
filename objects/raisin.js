//@JCPenne - GitHub - Jack Palmer
//@harinderlabana - GitHub - Sunny Labana
//@whammydiver - GitHub - Paul Taylor

// function to find a raisin in the ingredients list of a single cookie
const raisinAlarm = function (cookie) {
  // scan through the cookies ingredients to find the raisin
  for (const ingredient of cookie) {
    // check to see if the ingredient matches a raisin
    if (ingredient === '🍇') {
      // raisin found, return alert
      return `Raisin Alert!`;
    }
  }
  // no raisin found, return good message
  return `All good!`;
};

// function to find a raisin in the ingredients list of an array of cookies
const raisinAlarmArray = function (cookies) {
  let results = [];
  for (const cookie of cookies) {
    // Trigger variable to be flipped to true when a raisin is found
    let trigger = false;
    for (const ingredient of cookie) {
      if (ingredient === '🍇') {
        trigger = true;
      }
    }
    // Ternary to push correct result depending on trigger status
    trigger ? results.push(`Raisin Alert!`):results.push(`All good!`);
  }
  return results;
};


// Test Cases
console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫']));
console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇']));
console.log(raisinAlarm(['🍫', '🍫', '🍫']));

console.log(
  raisinAlarmArray([
    ['🍫', '🍫', '🍇', '🍫'],
    ['🍫', '🍇', '🍫', '🍫', '🍇'],
    ['🍫', '🍫', '🍫'],
  ])
);
