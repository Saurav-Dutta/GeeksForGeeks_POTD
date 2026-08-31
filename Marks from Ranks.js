class Solution {
    getMarks(l, r, rank) {
        const n = l.length;
        const temp = [];
        
        // Unroll all intervals into a single flat array
        for (let i = 0; i < n; i++) {
            for (let j = l[i]; j <= r[i]; j++) {
                temp.push(j);
            }
        }
        
        const ans = [];
        // Map 1-based ranks to 0-based array indices
        for (let i = 0; i < rank.length; i++) {
            ans.push(temp[rank[i] - 1]);
        }
        
        return ans;
    }
}
