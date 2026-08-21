class Solution {
    transform(s1, s2) {
        if (s1.length !== s2.length) return -1;
        
        let um = {};
        
        // Count frequencies in s1
        for (let x of s1) {
            um[x] = (um[x] || 0) + 1;
        }
        
        // Decrement frequencies using s2
        for (let x of s2) {
            if (um[x] === undefined) return -1; // Character doesn't exist in s1
            um[x]--;
            if (um[x] === 0) {
                delete um[x];
            }
        }
        
        // If the map is not empty, characters don't match
        if (Object.keys(um).length > 0) return -1;
        
        let i = s1.length - 1;
        let j = s2.length - 1;
        let ans = 0;
        
        // Greedy matching from the back
        while (i >= 0 && j >= 0) {
            if (s1[i] === s2[j]) {
                i--;
                j--;
            } else {
                ans++;
                i--;
            }
        }
        
        return ans;
    }
}
