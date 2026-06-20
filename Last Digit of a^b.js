class Solution {
    getLastDigit(a, b) {
        if (b === "0") {
            return 1;
        }

        let base = parseInt(a[a.length - 1]);
        let exp_mod_4 = 0;

        for (let c of b) {
            exp_mod_4 = (exp_mod_4 * 10 + (c.charCodeAt(0) - 48)) % 4;
        }

        if (exp_mod_4 === 0) {
            exp_mod_4 = 4;
        }

        let result = 1;

        for (let i = 0; i < exp_mod_4; i++) {
            result = (result * base) % 10;
        }

        return result;
    }
}