const students = [
  { id: 1, name: 'bruce', age: 40 },
  { id: 2, name: 'zoidberg', age: 22 },
  { id: 3, name: 'alex', age: 22 },
  { id: 4, name: 'alex', age: 30 },
];

const sorter = students.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const ageA = a.age;
  const nameB = b.name.toUpperCase();
  const ageB = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB && ageA < ageB) {
    return 1;
  }
  return 0;
});
console.log(sorter);
