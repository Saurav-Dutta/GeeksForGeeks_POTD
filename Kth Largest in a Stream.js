class Solution {
  kthLargest(arr, k) {
    let n = arr.length;
    let res = new Array(n).fill(-1);

    // Min Heap implementation
    class MinHeap {
      constructor() {
        this.heap = [];
      }

      size() {
        return this.heap.length;
      }

      top() {
        return this.heap[0];
      }

      push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
      }

      pop() {
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return root;
      }

      bubbleUp(i) {
        while (i > 0) {
          let parent = Math.floor((i - 1) / 2);
          if (this.heap[parent] <= this.heap[i]) break;

          [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];
          i = parent;
        }
      }

      bubbleDown(i) {
        let n = this.heap.length;

        while (true) {
          let smallest = i;
          let left = 2 * i + 1;
          let right = 2 * i + 2;

          if (left < n && this.heap[left] < this.heap[smallest]) {
            smallest = left;
          }

          if (right < n && this.heap[right] < this.heap[smallest]) {
            smallest = right;
          }

          if (smallest === i) break;

          [this.heap[i], this.heap[smallest]] =
            [this.heap[smallest], this.heap[i]];

          i = smallest;
        }
      }
    }

    let pq = new MinHeap();

    for (let i = 0; i < n; i++) {
      pq.push(arr[i]);

      if (pq.size() > k) {
        pq.pop();
      }

      if (pq.size() === k) {
        res[i] = pq.top();
      }
    }

    return res;
  }
}