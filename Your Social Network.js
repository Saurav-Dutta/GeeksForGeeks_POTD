class Solution {
    socialNetwork(arr) {
        const n = arr.length + 1;
        const ans = [];
        
        for (let i = 2; i <= n; i++) {
            const dist = new Array(n + 1).fill(-1);
            let curr = i;
            let steps = 0;
            
            while (curr !== 1) {
                curr = arr[curr - 2];
                steps++;
                dist[curr] = steps;
            }
            
            for (let j = 1; j < i; j++) {
                if (dist[j] !== -1) {
                    ans.push({i, j, dist[j]});
                }
            }
        }
        return ans;
    }
}
