class Node {
    constructor(freq, idx) {
        this.freq = freq;
        this.idx = idx;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    buildCodes(root, code, ans) {
        if (!root) return;

        if (!root.left && !root.right) {
            ans.push(code);
            return;
        }

        this.buildCodes(root.left, code + "0", ans);
        this.buildCodes(root.right, code + "1", ans);
    }

    huffmanCodes(s, f) {
        let n = s.length;

        // Priority Queue (Min Heap using array + sort)
        let pq = [];

        for (let i = 0; i < n; i++) {
            pq.push(new Node(f[i], i));
        }

        // Sort function (same as C++ comparator)
        const compare = (a, b) => {
            if (a.freq === b.freq) return a.idx - b.idx;
            return a.freq - b.freq;
        };

        pq.sort(compare);

        if (n === 1) return ["0"];

        while (pq.length > 1) {
            // Pop two smallest
            let left = pq.shift();
            let right = pq.shift();

            let parent = new Node(
                left.freq + right.freq,
                Math.min(left.idx, right.idx)
            );

            parent.left = left;
            parent.right = right;

            pq.push(parent);

            // Re-sort after insertion
            pq.sort(compare);
        }

        let ans = [];
        this.buildCodes(pq[0], "", ans);

        return ans;
    }
}