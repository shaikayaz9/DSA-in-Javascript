const twoSum = function(nums, target) {
  const sorted = nums.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0]);
  
  let left = 0, right = sorted.length - 1;
  
  while (left < right) {
    const sum = sorted[left][0] + sorted[right][0];
    if (sum === target) {
      return [sorted[left][1], sorted[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};



console.log(twoSum([1,2,3,4,5,6,7],12))