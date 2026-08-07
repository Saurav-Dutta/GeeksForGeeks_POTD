class Solution {
    countFriendsPairings(n) {
        if (n <= 2) return n;

        let prev2 = 1;
        let prev1 = 2;

        for (let i = 3; i <= n; i++) {
            const curr = prev1 + (i - 1) * prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}