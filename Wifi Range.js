class Solution {
    wifiRange(s, x) {
        let n = s.length;
        let lastCovered = -1;

        for (let i = 0; i < n; i++) {
            if (s[i] === '1') {

                let left = Math.max(0, i - x);
                let right = Math.min(n - 1, i + x);

                if (left > lastCovered + 1) {
                    return false;
                }

                lastCovered = Math.max(lastCovered, right);
            }
        }

        return lastCovered === n - 1;
    }
}