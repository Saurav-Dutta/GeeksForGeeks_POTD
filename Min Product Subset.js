class Solution {
    minProd(arr) {
        let minpdt = Number.MAX_SAFE_INTEGER;
        let n = arr.length;
        
        // Sort numerically in ascending order
        arr.sort((a, b) => a - b);
        
        if (arr[0] >= 0) {
            return arr[0];
        }
        
        let pospdt = 1;
        let negpdt = 1;
        
        for (let i = 0; i < n; i++) {
            if (arr[i] > 0) {
                pospdt = pospdt * arr[i];
            } else if (arr[i] < 0) {
                if (i % 2 === 1 && i + 1 < n && arr[i + 1] < 0) {
                    negpdt *= arr[i];
                }
                if (i % 2 === 0) {
                    negpdt *= arr[i];
                }
            }
        }
        
        return pospdt * negpdt;
    }
}
