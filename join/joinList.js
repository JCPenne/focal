/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = function (concepts) {
  console.log(concepts);
  let result = "";
  if (concepts !== []) {
    for (i in concepts) {
      concepts[i] === concepts.at(-1)
        ? (result += concepts[i])
        : (result += concepts[i] + ", ");
    }
    if (concepts == []) {
      result = "";
    }
  }
  return result;
};
// Test / Driver Code below...
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
