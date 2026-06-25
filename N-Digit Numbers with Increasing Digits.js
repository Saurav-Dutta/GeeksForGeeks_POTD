class Solution {
    solve(n, num, res) {
        if (n === 0) {
            res.push(num);
            return;
        }

        for (let i = (num % 10) + 1; i <= 9; i++) {
            this.solve(n - 1, (num * 10) + i, res);
        }
    }

    increasingNumbers(n) {
        let res = [];

        if (n > 9)
            return res;

        if (n === 1)
            res.push(0);

        this.solve(n, 0, res);

        return res;
    }
}