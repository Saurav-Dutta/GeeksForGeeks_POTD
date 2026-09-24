class Solution {
    maxStackHeight(r, h) {
        const n = r.length;
        const discs = [];

        // 1. Gather the discs into coordinate pairs
        for (let i = 0; i < n; i++) {
            discs.push({ r: r[i], h: h[i] });
        }

        // 2. Sort: radius (r) ascending, then height (h) descending
        discs.sort((a, b) => {
            if (a.r !== b.r) {
                return a.r - b.r;
            }
            return b.h - a.h;
        });

        // 3. Setup a simple Fenwick Tree (Binary Indexed Tree)
        // Since max h[i] <= 1000 according to constraints, a size of 1005 is safe.
        const maxH = 1005;
        const bit = new Array(maxH + 1).fill(0);

        const update = (idx, val) => {
            while (idx <= maxH) {
                bit[idx] = Math.max(bit[idx], val);
                idx += idx & -idx;
            }
        };

        const query = (idx) => {
            let maxVal = 0;
            while (idx > 0) {
                maxVal = Math.max(maxVal, bit[idx]);
                idx -= idx & -idx;
            }
            return maxVal;
        };

        let maxOverallHeight = 0;

        // 4. Process each disc sequentially
        for (let i = 0; i < n; i++) {
            const currentH = discs[i].h;
            
            // Query the highest valid stack below current height
            const bestPrev = query(currentH - 1);
            const currentTotal = bestPrev + currentH;
            
            // Update the structure
            update(currentH, currentTotal);
            maxOverallHeight = Math.max(maxOverallHeight, currentTotal);
        }

        return maxOverallHeight;
    }
        }
