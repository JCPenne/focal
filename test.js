// var missingNumber = function (nums) {
//   const length = nums.length;
//   // console.log(`length = ${length}`);
//   const arr = [];
//   let result = 0;

//   for (i = 0; i <= length; i++) {
//     arr.push(i);
//   }
//   // console.log(`arr = ${arr}`);
//   // console.log(`nums = ${nums}`);
//   for (num of arr) {
//     if (!nums.includes(num)) {
//       result = num;
//     }
//   }
//   return result;
// };

var missingNumber = function (nums) {
  sortedArr = nums.sort((a, b) => a - b);
  console.log(sortedArr);
  for (num in nums) {
    if (!nums.includes(num)) {
      result = num;
    }
  }
  return result;
};

const nums = [3, 0, 1];
const nums2 = [0, 1];
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));
