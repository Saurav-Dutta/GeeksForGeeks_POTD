class Solution {
    maxSubsetXOR(arr) {
        const n = arr.length;
        let index = 0;

        for (let bit = 31; bit >= 0; bit--) {
            let maxIndex = -1;

            for (let i = index; i < n; i++) {
                if ((arr[i] & (1 << bit)) !== 0) {
                    maxIndex = i;
                    break;
                }
            }

            if (maxIndex === -1) continue;

            [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]];

            for (let i = 0; i < n; i++) {
                if (i !== index && (arr[i] & (1 << bit)) !== 0) {
                    arr[i] ^= arr[index];
                }
            }

            index++;
        }

        let ans = 0;
        for (let i = 0; i < index; i++) {
            ans = Math.max(ans, ans ^ arr[i]);
        }

        return ans;
    }
}