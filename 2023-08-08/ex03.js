const nums = [12, 34, 192, 911, 84, 885, 32, 390, 492, 283, 585, 334, 224];

console.log(nums);

let deletedNums = nums.splice(5, 3); // deletes 885, 32, 390
console.log('nums', nums);
console.log('deleted elements', deletedNums);

nums.splice(5, 0, 100, 200, 300); // inserts 100, 200, 300 at index 5 (0 is important)
console.log('nums', nums);

nums.splice(5, 3, 66, 77, 88); // replaces 100, 200, 300 with 66, 77, 88 respectively
console.log('nums', nums);

nums.splice(5, 2, 10, 20, 30); // '2' numbers are replaced with 10, 20, 30 at index '5'
console.log('nums', nums);
