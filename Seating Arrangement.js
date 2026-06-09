class Solution {
    canSeatAllPeople(k, seats) {
        const n = seats.length;

        for (let i = 0; i < n; i++) {
            const leftEmpty = (i === 0 || seats[i - 1] === 0);

            if (!leftEmpty && seats[i]) return false;

            if (seats[i]) continue;

            const rightEmpty = (i === n - 1 || seats[i + 1] === 0);

            if (leftEmpty && rightEmpty) {
                seats[i] = 1;
                k--;
            }
        }

        return k <= 0;
    }
}