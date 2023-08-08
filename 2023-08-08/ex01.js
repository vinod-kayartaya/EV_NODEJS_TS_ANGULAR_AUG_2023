const nums = [12, 34, 192, 911, 84, 885, 32, 390, 492, 283, 585, 334, 224];

let searchNum = 8851;
let searchIndex = nums.findIndex((n) => n === searchNum);

if (searchIndex === -1) {
  console.log(`${searchNum} is not in the given array`);
} else {
  console.log(`the index of ${searchNum} in the given array is ${searchIndex}`);
}
