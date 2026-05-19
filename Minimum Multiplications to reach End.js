class Solution {
    minSteps(arr, start, end) {
        if (start === end) return 0;

        let q = [];
        let dist = new Array(1001).fill(Infinity);

        q.push(start);
        dist[start] = 0;

        while (q.length > 0) {
            let t = q.shift();

            for (let ch of arr) {
                let x = (t * ch) % 1000;

                if (dist[x] > dist[t] + 1) {
                    dist[x] = dist[t] + 1;

                    if (x === end) {
                        return dist[x];
                    }

                    q.push(x);
                }
            }
        }

        return -1;
    }
}