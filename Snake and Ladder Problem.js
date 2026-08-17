class Solution {
    minThrows(n, lad, sn) {
        // Map to store snake and ladder redirections
        const redirect = new Map();
        
        // Process ladders array
        for (let i = 0; i < lad.length; i += 2) {
            redirect.set(lad[i], lad[i + 1]);
        }
        
        // Process snakes array
        for (let i = 0; i < sn.length; i += 2) {
            redirect.set(sn[i], sn[i + 1]);
        }
        
        const target = n * n;
        
        // JavaScript doesn't have a built-in Queue, so we use an array. 
        // For heavy constraints, standard push()/shift() is O(N), but perfectly fine here.
        const q = [];
        const vis = new Array(target + 1).fill(false);
        
        q.push(1);
        vis[1] = true;
        let count = 0;
        
        while (q.length > 0) {
            let sz = q.length;
            
            while (sz--) {
                const fr = q.shift(); // Removes the first element
                
                if (fr === target) {
                    return count;
                }
                
                for (let i = 1; i <= 6; i++) {
                    let nx = fr + i;
                    
                    if (nx > target) {
                        continue;
                    }
                    
                    // Check if the current cell has a snake or ladder
                    if (redirect.has(nx)) {
                        nx = redirect.get(nx);
                    }
                    
                    if (!vis[nx]) {
                        vis[nx] = true;
                        q.push(nx);
                    }
                }
            }
            count++;
        }
        
        return -1;
    }
}
