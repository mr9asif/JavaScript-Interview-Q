// Problem: Find all unique triplets in the array that sum to zero.

// function threeSum(nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) continue;
//       let left = i + 1, right = nums.length - 1;
//       while (left < right) {
//         const sum = nums[i] + nums[left] + nums[right];
//         if (sum === 0) {
//           result.push([nums[i], nums[left], nums[right]]);
//           while (nums[left] === nums[left + 1]) left++;
//           while (nums[right] === nums[right - 1]) right--;
//           left++;
//           right--;
//         } else if (sum < 0) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }
//     return result;
//   }
//   console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
  

// Problem: Find two lines in an array that together hold the most water.

// function maxArea(height) {
//     let max = 0, left = 0, right = height.length - 1;
  
//     while (left < right) {
//       const area = Math.min(height[left], height[right]) * (right - left);
//       max = Math.max(max, area);
//       if (height[left] < height[right]) left++;
//       else right--;
//     }
//     return max;
//   }
//   console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
  

// Problem: Group anagrams together in an array of strings.
// function groupAnagrams(strs) {
//     const map = new Map();
  
//     for (let str of strs) {
//       const key = str.split('').sort().join('');
//       if (!map.has(key)) map.set(key, []);
//       map.get(key).push(str);
//     }
//     return Array.from(map.values());
//   }
//   console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//   // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  
// Problem: Find the first and last index of a target in a sorted array.
// function searchRange(nums, target) {
//     function findBound(isFirst) {
//       let left = 0, right = nums.length - 1, bound = -1;
//       while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//           bound = mid;
//           isFirst ? right = mid - 1 : left = mid + 1;
//         } else if (nums[mid] < target) {
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//       return bound;
//     }
//     return [findBound(true), findBound(false)];
//   }
//   console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
  
// Problem: Given a matrix, return its elements in spiral order.
// function spiralOrder(matrix) {
//     const result = [];
//     while (matrix.length) {
//       result.push(...matrix.shift());
//       matrix = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i]).reverse()) : [];
//     }
//     return result;
//   }
//   console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//   // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Problem: Implement a curried function.
// function curry(fn) {
//     return function curried(...args) {
//       return args.length >= fn.length
//         ? fn(...args)
//         : (...next) => curried(...args, ...next);
//     };
//   }
//   const add = (a, b, c) => a + b + c;
//   const curriedAdd = curry(add);
//   console.log(curriedAdd(1)(2)(3)); // Output: 6
  
// Problem: Find the first non-repeating character in a string.
// function firstUniqChar(s) {
//     const map = {};
//     for (let char of s) map[char] = (map[char] || 0) + 1;
//     for (let i = 0; i < s.length; i++) {
//       if (map[s[i]] === 1) return i;
//     }
//     return -1;
//   }
//   console.log(firstUniqChar("loveleetcode")); // Output: 2
  

//   Problem: Remove duplicates from a sorted array in-place.
// function removeDuplicates(nums) {
//     let index = 1;
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] !== nums[i - 1]) {
//         nums[index] = nums[i];
//         index++;
//       }
//     }
//     return index;
//   }
//   console.log(removeDuplicates([1, 1, 2])); // Output: 2
  
// Problem: Check if the input string contains valid parentheses.
// function isValid(s) {
//     const stack = [];
//     const map = { ')': '(', '}': '{', ']': '[' };
//     for (let char of s) {
//       if (char in map) {
//         if (stack.pop() !== map[char]) return false;
//       } else {
//         stack.push(char);
//       }
//     }
//     return stack.length === 0;
//   }
//   console.log(isValid("()[]{}")); // Output: true
//   console.log(isValid("(]")); // Output: false
  

// console.log(null == null);   // Output: true
// console.log(null === null);  // Output: true
// console.log(null == undefined);  // Output: true
// console.log(null === undefined); // Output: false

// console.log([1, 2] == [1, 2]);  // Output: false (Different references)
// console.log([1, 2] === [1, 2]); // Output: false

// console.log(typeof NaN); // Output: "number" (NaN is a special numeric value)

// function regular() {
//     console.log(this); // `this` depends on the calling context.
//   }
  
//   const arrow = () => {
//     console.log(this); // `this` is lexically bound to the surrounding scope.
//   };
  
// console.log([] + []);      // Output: "" (Empty string)
// console.log([] + {});      // Output: "[object Object]"
// console.log({} + []);      // Output: 0 (Due to ambiguous grammar)

// null: A value explicitly set to indicate "no value."
// undefined: A variable or property that hasn’t been assigned a value.

// console.log(typeof null);        // Output: "object" (Historical bug in JavaScript)
// console.log(typeof undefined);   // Output: "undefined"
// console.log(typeof []);          // Output: "object" (Arrays are objects)
// console.log(typeof (() => {}));  // Output: "function"

// const obj = { a: 1, b: 2 };
// console.log(delete obj.a);  // Output: true (Property `a` is removed)
// console.log(obj);           // Output: { b: 2 }
// console.log(!!"hello");   // Output: true (Converts value to boolean)
// console.log(!!0);         // Output: false
// console.log(1 < 2 < 3);   // Output: true (1 < 2 is true, true < 3 is true)
// console.log(3 > 2 > 1);   // Output: false (3 > 2 is true, true > 1 is false)
// console.log([] == ![]);   // Output: true (Type coercion makes both sides equal)

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
//   // Output: 3, 3, 3 (Due to `var` being function-scoped)
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
  // Output: 0, 1, 2 (`let` is block-scoped)
  
//   const obj = { a: 1, b: 2 };
// for (const key in obj) {
//   console.log(key); // Output: "a", "b"
// }

// const arr = [1, 2, 3];
// for (const key in arr) {
//   console.log(key); // Output: "0", "1", "2"
// }

// const obj = {
//     method() {
//       console.log(this);
//     }
//   };
//   obj.method();   // Output: obj
  
//   const method = obj.method;
//   method();       // Output: undefined (in strict mode)

  