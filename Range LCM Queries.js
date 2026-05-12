class Solution {
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    lcmVal(a, b) {
        return Math.floor(a / this.gcd(a, b)) * b;
    }

    build(node, st, en, seg, arr) {
        if (st === en) {
            seg[node] = arr[st];
            return;
        }

        let mid = Math.floor((st + en) / 2);

        this.build(2 * node, st, mid, seg, arr);
        this.build(2 * node + 1, mid + 1, en, seg, arr);

        seg[node] = this.lcmVal(seg[2 * node], seg[2 * node + 1]);
    }

    update(node, st, en, idx, val, seg) {
        if (st === en) {
            seg[node] = val;
            return;
        }

        let mid = Math.floor((st + en) / 2);

        if (idx <= mid) {
            this.update(2 * node, st, mid, idx, val, seg);
        } else {
            this.update(2 * node + 1, mid + 1, en, idx, val, seg);
        }

        seg[node] = this.lcmVal(seg[2 * node], seg[2 * node + 1]);
    }

    query(node, st, en, l, r, seg) {
        if (r < st || en < l) {
            return 1;
        }

        if (l <= st && en <= r) {
            return seg[node];
        }

        let mid = Math.floor((st + en) / 2);

        let left = this.query(2 * node, st, mid, l, r, seg);
        let right = this.query(2 * node + 1, mid + 1, en, l, r, seg);

        return this.lcmVal(left, right);
    }

    RangeLCMQuery(arr, queries) {
        let n = arr.length;
        let seg = new Array(4 * n).fill(1);

        this.build(1, 0, n - 1, seg, arr);

        let ans = [];

        for (let q of queries) {
            if (q[0] === 1) {
                let idx = q[1];
                let val = q[2];

                arr[idx] = val;

                this.update(1, 0, n - 1, idx, val, seg);
            } else {
                let l = q[1];
                let r = q[2];

                ans.push(this.query(1, 0, n - 1, l, r, seg));
            }
        }

        return ans;
    }
}