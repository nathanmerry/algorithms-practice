// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] // because nums[0] + nums[1] = 2 + 7 = 9

// please turn off co pilot from here

const nums = [2, 7, 11, 15];
const target = 9;
const mapped = {};

const findTwoSum = () => {
  const mapped = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    console.log(complement);

    if (mapped[complement] !== undefined) {
      return [mapped[complement], i];
    }

    mapped[nums[i]] = i;
  }
};

findTwoSum();
