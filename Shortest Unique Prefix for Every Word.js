class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class Solution {
    findPrefixes(arr) {
        let root = new TrieNode();

        // Insert all words into Trie
        for (let word of arr) {
            let node = root;
            for (let ch of word) {
                if (!node.children.has(ch)) {
                    node.children.set(ch, new TrieNode());
                }
                node = node.children.get(ch);
                node.count++;
            }
        }

        let ans = [];

        // Find shortest unique prefix
        for (let word of arr) {
            let node = root;
            let prefix = "";

            for (let ch of word) {
                node = node.children.get(ch);
                prefix += ch;
                if (node.count === 1) break;
            }

            ans.push(prefix);
        }

        return ans;
    }
}