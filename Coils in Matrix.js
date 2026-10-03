class Solution {
    formCoils(n) {
        const m = 8 * n * n;
        const total = 16 * n * n;
        
        const base = new Array(m);
        base[0] = 8 * n * n + 2 * n;
        
        let curr = base[0];
        let flag = 1;
        let step = 2;
        let idx = 1;
        
        while (idx < m) {
            for (let i = 0; i < step && idx < m; i++) {
                curr -= 4 * n * flag;
                base[idx++] = curr;
            }
            if (idx >= m) break;
            for (let i = 0; i < step && idx < m; i++) {
                curr += flag;
                base[idx++] = curr;
            }
            flag = -flag;
            step += 2;
        }
        
        // Clone and reverse the base array to form coil 2
        const coil2 = [...base].reverse();
        
        // Map the inverse values to form coil 1
        const coil1 = new Array(m);
        for (let i = 0; i < m; i++) {
            coil1[i] = total + 1 - coil2[i];
        }
        
        return [coil1, coil2];
    }
}
