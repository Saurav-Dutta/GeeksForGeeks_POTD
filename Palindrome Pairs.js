class Solution {
    isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    palindromePair(arr) {
        const mp = new Map();
        const n = arr.length;

        for (let i = 0; i < n; i++) {
            mp.set(arr[i], i);
        }

        for (let i = 0; i < n; i++) {
            const s = arr[i];
            const len = s.length;

            for (let j = 0; j <= len; j++) {
                const prefix = s.substring(0, j);
                const suffix = s.substring(j);

                // Case 1: prefix is palindrome → look for reverse(suffix) in map
                if (this.isPalindrome(prefix, 0, prefix.length - 1)) {
                    const revSuffix = suffix.split("").reverse().join("");
                    if (mp.has(revSuffix) && mp.get(revSuffix) !== i) {
                        return true;
                    }
                }

                // Case 2: suffix is palindrome → look for reverse(prefix) in map
                // j != len avoids duplicate check of Case 1 when suffix is ""
                if (j !== len && this.isPalindrome(suffix, 0, suffix.length - 1)) {
                    const revPrefix = prefix.split("").reverse().join("");
                    if (mp.has(revPrefix) && mp.get(revPrefix) !== i) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}