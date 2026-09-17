class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        const top = this.heap[0];
        const bottom = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = bottom;
            this._sinkDown(0);
        }
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        let length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[][]} edges
     * @param {number} n
     * @param {number} src
     * @param {number} dst
     * @return {number}
     */
    minimumEdgeReversal(edges, n, src, dst) {
        // Initialize adjacency lists
        const v = Array.from({ length: n + 1 }, () => []);
        const v1 = Array.from({ length: n + 1 }, () => []);

        for (let i = 0; i < edges.length; i++) {
            const a = edges[i][0];
            const b = edges[i][1];
            v[a].push(b);  // Original directed edge (weight 0)
            v1[b].push(a); // Reversed edge (weight 1)
        }

        // Initialize distance array with Infinity
        const dist = new Array(n + 1).fill(Infinity);
        const pq = new MinHeap();

        dist[src] = 0;
        pq.push([0, src]); // Elements stored as [cost, node]

        while (!pq.isEmpty()) {
            const [a, b] = pq.pop();

            if (a > dist[b]) {
                continue;
            }

            const w = v[b];
            const w1 = v1[b];

            // Traverse original directions (0 weight)
            for (let i = 0; i < w.length; i++) {
                if (a < dist[w[i]]) {
                    dist[w[i]] = a;
                    pq.push([a, w[i]]);
                }
            }

            // Traverse reversed directions (1 weight)
            for (let i = 0; i < w1.length; i++) {
                if (a + 1 < dist[w1[i]]) {
                    dist[w1[i]] = a + 1;
                    pq.push([a + 1, w1[i]]);
                }
            }
        }

        // Return -1 if destination is unreachable
        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}
