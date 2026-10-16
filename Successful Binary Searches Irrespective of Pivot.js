class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countAlwaysFound(arr) {
        let n = arr.length;
        if (n === 0) return 0;
        
        // Allocate suffix minimum tracking array
        let sufMin = new Array(n);
        sufMin[n - 1] = arr[n - 1];
        
        for (let i = n - 2; i >= 0; --i) {
            sufMin[i] = Math.min(arr[i], sufMin[i + 1]);
        }
        
        let ans = 0;
        let preMax = -Infinity; // Equivalent to INT_MIN
        
        for (let i = 0; i < n; ++i) {
            let leftOk = (i === 0) || (arr[i] > preMax);
            let rightOk = (i === n - 1) || (arr[i] < sufMin[i + 1]);
            
            if (leftOk && rightOk) {
                ++ans;
            }
            
            preMax = Math.max(preMax, arr[i]);
        }
        
        return ans;
    }
}
