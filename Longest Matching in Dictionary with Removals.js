class Solution {
    findLongestWord(s, d) {
        // Initialize an array of 26 empty arrays to hold character positions
        const pos = Array.from({ length: 26 }, () => []);
        
        // Populate the position map
        for (let i = 0; i < s.length; i++) {
            const charCode = s.charCodeAt(i) - 97; // 97 is the ASCII code for 'a'
            pos[charCode].push(i);
        }
        
        // Helper function mimicking C++ std::upper_bound
        // Returns the index of the first element greater than 'target'
        const upperBound = (arr, target) => {
            let low = 0, high = arr.length;
            while (low < high) {
                const mid = (low + high) >> 1;
                if (arr[mid] <= target) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            return low;
        };
        
        let ans = "";
        
        // Iterate through each word in the dictionary
        for (const w of d) {
            let last = -1;
            let ok = true;
            
            for (let i = 0; i < w.length; i++) {
                const charCode = w.charCodeAt(i) - 97;
                const p = pos[charCode];
                
                // Find the first occurrence after 'last' using binary search
                const idx = upperBound(p, last);
                
                if (idx === p.length) {
                    ok = false;
                    break;
                }
                last = p[idx];
            }
            
            if (ok) {
                // If it's a valid subsequence, check if it's better than our current answer
                if (w.length > ans.length || (w.length === ans.length && w < ans)) {
                    ans = w;
                }
            }
        }
        
        return ans;
    }
}
