class Solution {
    maxCharGap(s) {
        let first = new Array(26).fill(-1);
        let end = new Array(26).fill(-1);

        let n = s.length;

        for (let i = 0; i < n; i++) {
            let ch = s.charCodeAt(i) - 'a'.charCodeAt(0);

            if (first[ch] === -1) {
                first[ch] = i;
            } else {
                end[ch] = i;
            }
        }

        let mx = -3;

        for (let i = 0; i < 26; i++) {
            if (end[i] !== -1 && first[i] !== -1) {
                mx = Math.max(mx, end[i] - first[i] - 1);
            }
        }

        return mx === -3 ? -1 : mx;
    }
}