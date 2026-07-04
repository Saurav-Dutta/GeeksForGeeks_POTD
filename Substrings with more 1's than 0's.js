class Solution {
    countSubstring(s) {
        let n = s.length;
        let offset = n;

        let freq = new Array(2 * n + 1).fill(0);
        freq[offset] = 1;

        let prefix = 0;
        let smaller = 0;
        let answer = 0;

        for (let ch of s) {
            if (ch === '1') {
                smaller += freq[prefix + offset];
                prefix++;
            } else {
                smaller -= freq[prefix - 1 + offset];
                prefix--;
            }

            answer += smaller;
            freq[prefix + offset]++;
        }

        return answer;
    }
}