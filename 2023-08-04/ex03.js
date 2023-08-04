const nums = [12, 34, 192, 911, 84, 885, 32];

console.log('the array "nums" contains', nums.length, 'elements');
nums.push(123);
nums.push(44, 290);
console.log('nums =', nums);

nums.unshift(100);
nums.unshift(200, 300);
console.log('nums =', nums);

let n = nums.pop(); // removes the last element
console.log(`after removing ${n} from nums, it contains ${nums}`);
n = nums.shift(); // removes the first element
console.log(`after removing ${n} from nums, it contains ${nums}`);
nums[15] = 999;
console.log(`nums = ${nums}`);
console.log(
  `after setting 999 as the element at index 15, the length of nums is ${nums.length}`
);
console.log(`element at index 11 is ${nums[11]}`); 
