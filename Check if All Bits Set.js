class Solution {
    isBitSet(n) {
        if (n === 0) {
            return false;
        }

        while (n > 0) {
            let r = n % 2;

            if (r === 0) {
                return false;
            }

            n = Math.floor(n / 2);
        }

        return true;
    }
}