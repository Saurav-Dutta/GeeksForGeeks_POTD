class Solution {
  findLargest(arr) {
    // Convert numbers to strings
    arr = arr.map(e => e.toString());

    // Custom sort
    arr.sort((a, b) => {
      let ab = a + b;
      let ba = b + a;

      if (ab > ba) return -1;
      if (ab < ba) return 1;
      return 0;
    });

    // Join and remove leading zeros
    let s = arr.join('').replace(/^0+/, '');

    return s.length > 0 ? s : "0";
  }
}