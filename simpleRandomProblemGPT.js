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
  