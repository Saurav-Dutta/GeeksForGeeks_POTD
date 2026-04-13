class Solution {
  nextPalindrome(a) {
    let n = a.length;

    // Check if all digits are 9
    let all9 = true;
    for (let i = 0; i < n; i++) {
      if (a[i] !== 9) {
        all9 = false;
        break;
      }
    }

    if (all9) {
      let ans = new Array(n + 1).fill(0);
      ans[0] = 1;
      ans[n] = 1;
      return ans;
    }

    let ans = [...a]; // copy array

    // Mirror left to right
    for (let i = 0; i < Math.floor(n / 2); i++) {
      ans[n - 1 - i] = ans[i];
    }

    // Compare arrays
    if (this.isGreater(ans, a)) return ans;

    // Add 1 to middle
    let carry = 1;
    let mid = Math.floor(n / 2);

    if (n % 2 === 1) {
      ans[mid] += carry;
      carry = Math.floor(ans[mid] / 10);
      ans[mid] %= 10;
      mid--;
    } else {
      mid--;
    }

    // Propagate carry
    while (mid >= 0 && carry) {
      ans[mid] += carry;
      carry = Math.floor(ans[mid] / 10);
      ans[mid] %= 10;
      ans[n - 1 - mid] = ans[mid];
      mid--;
    }

    // Mirror again
    for (let i = 0; i < Math.floor(n / 2); i++) {
      ans[n - 1 - i] = ans[i];
    }

    return ans;
  }

  // Helper to compare arrays (ans > a)
  isGreater(ans, a) {
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] > a[i]) return true;
      if (ans[i] < a[i]) return false;
    }
    return false;
  }
}