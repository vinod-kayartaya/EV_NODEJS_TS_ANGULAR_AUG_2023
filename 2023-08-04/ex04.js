const nums = [12, 34, 192, 911, 84, 885, 32, 390, 492, 283, 585, 334, 224];

// the wrong way of processing an array
/*
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
*/
// the correct way of doing is, pass the "job" to the native code
nums.forEach((n, i, ar) =>
  console.log(`value at index ${i} is ${n} which is a member of ${ar}`)
);

// get a new array consisting of only even numbers
const evenNums = nums.filter((n) => n % 2 === 0);
console.log(`evenNums = ${evenNums}`);

const oddNums = nums.filter((n) => n % 2);
console.log(`oddNums = ${oddNums}`);
