class Solution {
    lexiString(s) {
        // Duplicate the string to handle circular behavior
        const doubled = s + s;
        const n = doubled.length;
        
        // Initialize the failure array with -1
        const f = new Array(n).fill(-1);
        let k = 0;
        
        for (let j = 1; j < n; j++) {
            const sj = doubled[j];
            let i = f[j - k - 1];
            
            while (i !== -1 && sj !== doubled[k + i + 1]) {
                if (sj < doubled[k + i + 1]) {
                    k = j - i - 1;
                }
                i = f[i];
            }
            
            if (sj !== doubled[k + i + 1]) {
                if (sj < doubled[k]) {
                    k = j;
                }
                f[j - k] = -1;
            } else {
                f[j - k] = i + 1;
            }
        }
        
        // Return the substring of original length starting at index k
        return doubled.substring(k, k + s.length);
    }
}
