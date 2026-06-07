class Solution {
    profession(level, pos) {
        const flips = (pos - 1)
            .toString(2)
            .split('')
            .filter(bit => bit === '1')
            .length;

        return (flips & 1) ? "Doctor" : "Engineer";
    }
}