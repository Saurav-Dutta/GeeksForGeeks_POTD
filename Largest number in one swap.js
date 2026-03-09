class Solution {
  largestSwap(s) {
    let arr = s.split('');
    let n = arr.length;

    let maxi = new Array(n).fill(0);
    maxi[n - 1] = n - 1;

    // Build right-side max index array
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[maxi[i + 1]]) {
        maxi[i] = i;
      } else {
        maxi[i] = maxi[i + 1];
      }
    }

    // Find first beneficial swap
    for (let i = 0; i < n; i++) {
      if (i !== maxi[i] && arr[i] !== arr[maxi[i]]) {
        // swap
        [arr[i], arr[maxi[i]]] = [arr[maxi[i]], arr[i]];
        return arr.join('');
      }
    }

    return arr.join('');
  }
}