class Solution {
    makeBeautiful(arr) {
        let stack = [];

        for (let num of arr) {
            if (stack.length === 0) {
                stack.push(num);
            } else {
                let top = stack[stack.length - 1];

                if ((top >= 0 && num < 0) || (top < 0 && num >= 0)) {
                    stack.pop();
                } else {
                    stack.push(num);
                }
            }
        }

        return stack;
    }
}