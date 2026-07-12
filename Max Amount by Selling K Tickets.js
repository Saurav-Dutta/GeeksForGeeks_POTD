// User template for JavaScript

class Solution {
    maxAmount(arr, k) {
        const mod = 1000000007;

        class MaxHeap {
            constructor() {
                this.heap = [];
            }

            push(val) {
                this.heap.push(val);
                let i = this.heap.length - 1;
                while (i > 0) {
                    let p = Math.floor((i - 1) / 2);
                    if (this.heap[p] >= this.heap[i]) break;
                    [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                    i = p;
                }
            }

            pop() {
                if (this.heap.length === 1) return this.heap.pop();
                let top = this.heap[0];
                this.heap[0] = this.heap.pop();

                let i = 0;
                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let largest = i;

                    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                        largest = left;
                    }
                    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                        largest = right;
                    }
                    if (largest === i) break;

                    [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
                    i = largest;
                }

                return top;
            }

            isEmpty() {
                return this.heap.length === 0;
            }
        }

        const heap = new MaxHeap();

        for (let num of arr) {
            heap.push(num);
        }

        let res = 0;

        while (k > 0 && !heap.isEmpty()) {
            let x = heap.pop();
            res = (res + x) % mod;
            x--;
            k--;

            if (x > 0) {
                heap.push(x);
            }
        }

        return res;
    }
}