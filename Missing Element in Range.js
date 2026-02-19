class Solution {
  missinRange(arr, low, high) {
    let result = [];

    // Create a Set from the array (equivalent to unordered_set)
    let st = new Set(arr);

    for (let i = low; i <= high; i++) {
      if (!st.has(i)) {
        result.push(i);
      }
    }

    return result;
  }
}
