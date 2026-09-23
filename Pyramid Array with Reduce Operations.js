class Solution {
    buildSparse(arr) {
        const n = arr.length;
        let LOG = 1;
        while ((1 << LOG) <= n) LOG++;
        
        // Initialize the 2D sparse table
        const sp = Array.from({ length: LOG }, () => new Array(n).fill(0));
        
        // Base case: length 1 intervals
        sp[0] = [...arr];
        
        for (let j = 1; j < LOG; j++) {
            for (let i = 0; i + (1 << j) <= n; i++) {
                sp[j][i] = Math.min(sp[j-1][i], sp[j-1][i + (1 << (j-1))]);
            }
        }
        return sp;
    }

    queryMin(sp, logTable, l, r) {
        const len = r - l + 1;
        const k = logTable[len];
        return Math.min(sp[k][l], sp[k][r - (1 << k) + 1]);
    }

    formPyramid(arr) {
        const n = arr.length;
        const P = new Array(n);
        const Q = new Array(n);
        
        for (let i = 0; i < n; i++) {
            P[i] = arr[i] - i;
            Q[i] = arr[i] + i;
        }
        
        const spP = this.buildSparse(P);
        const spQ = this.buildSparse(Q);
        
        const logTable = new Array(n + 1).fill(0);
        for (let i = 2; i <= n; i++) {
            logTable[i] = logTable[Math.floor(i / 2)] + 1;
        }
        
        let totalSum = 0;
        for (const v of arr) {
            totalSum += v;
        }
        
        let maxSq = 0;
        for (let c = 0; c < n; c++) {
            const maxR = Math.min(c, n - 1 - c);
            let lo = 0, hi = maxR, best = 0;
            
            while (lo <= hi) {
                const mid = Math.floor((lo + hi) / 2);
                const minP = this.queryMin(spP, logTable, c - mid, c);
                const minQ = this.queryMin(spQ, logTable, c, c + mid);
                
                const condP = (minP + c) >= (mid + 1);
                const condQ = (minQ - c) >= (mid + 1);
                
                if (condP && condQ) {
                    best = mid;
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
            const x = best + 1;
            maxSq = Math.max(maxSq, x * x);
        }
        
        return totalSum - maxSq;
    }
}
