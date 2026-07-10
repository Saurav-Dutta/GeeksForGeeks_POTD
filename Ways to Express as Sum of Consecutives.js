class Solution {
    getCount(n) {
        let k = 0;
        let i = 1;

        while (n > 0) {
            n = n - i;
            if (n % i === 0) k++;
            i++;
        }

        return k - 1;
    }
}