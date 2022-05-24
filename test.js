const planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
};
for (let planet in planetMoons) {
  let numOfMoons = planetMoons[planet];
  console.log(numOfMoons);
}
