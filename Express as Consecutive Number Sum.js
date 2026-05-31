class Solution {
    isSumOfConsecutive(n) {
        return (n & (n - 1)) !== 0;
    }
}