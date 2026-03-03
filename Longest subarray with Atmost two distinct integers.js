class Solution {
  totalElements(arr) {
    let n = arr.length;
    let maxi = 0;
    let i = 0, j = 0;
    let mp = new Map();

    while (j < n) {
      // Add current element
      mp.set(arr[j], (mp.get(arr[j]) || 0) + 1);

      // Shrink window if more than 2 distinct elements
      while (mp.size > 2) {
        mp.set(arr[i], mp.get(arr[i]) - 1);

        if (mp.get(arr[i]) === 0) {
          mp.delete(arr[i]);
        }
        i++;
      }

      // Update maximum length
      maxi = Math.max(maxi, j - i + 1);

      j++;
    }

    return maxi;
  }
}