class Solution {
  visibleBuildings(arr) {
    if (arr.length === 0) return 0;

    let maxSoFar = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= maxSoFar) {
        count++;
        maxSoFar = arr[i];
      }
    }

    return count;
  }
}