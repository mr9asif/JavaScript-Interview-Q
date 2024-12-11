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
  