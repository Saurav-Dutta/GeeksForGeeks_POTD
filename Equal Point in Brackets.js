class Solution {
    findIndex(s) {
        let count = 0;

        for (let ch of s) {
            if (ch === ')') {
                count++;
            }
        }

        return count;
    }
}