class Solution {
  commonElements(arr1, arr2, arr3) {
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    let s3 = new Set(arr3);

    let freq = new Map();

    for (let x of s1) {
      freq.set(x, (freq.get(x) || 0) + 1);
    }

    for (let x of s2) {
      freq.set(x, (freq.get(x) || 0) + 1);
    }

    for (let x of s3) {
      freq.set(x, (freq.get(x) || 0) + 1);
    }

    let ans = [];

    for (let [key, value] of freq) {
      if (value === 3) {
        ans.push(key);
      }
    }

    // Sort to match C++ map ordered output
    ans.sort((a, b) => a - b);

    return ans;
  }
}