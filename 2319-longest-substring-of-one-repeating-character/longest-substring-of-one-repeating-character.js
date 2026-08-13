/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const tree = new Array(4 * n);

    function createNode(char, len = 1) {
        return {
            max_len: len,
            pref_len: len,
            suff_len: len,
            left_char: char,
            right_char: char
        };
    }

    function merge(left, right, leftLen, rightLen) {
        const res = {
            max_len: Math.max(left.max_len, right.max_len),
            pref_len: left.pref_len,
            suff_len: right.suff_len,
            left_char: left.left_char,
            right_char: right.right_char
        };

        if (left.right_char === right.left_char) {
            const crossLen = left.suff_len + right.pref_len;
            res.max_len = Math.max(res.max_len, crossLen);

            if (left.pref_len === leftLen) {
                res.pref_len = leftLen + right.pref_len;
            }
            if (right.suff_len === rightLen) {
                res.suff_len = rightLen + left.suff_len;
            }
        }

        return res;
    }

    function build(node, start, end) {
        if (start === end) {
            tree[node] = createNode(s[start]);
            return;
        }
        const mid = (start + end) >> 1;
        const leftNode = node << 1;
        const rightNode = leftNode | 1;

        build(leftNode, start, mid);
        build(rightNode, mid + 1, end);

        tree[node] = merge(tree[leftNode], tree[rightNode], mid - start + 1, end - mid);
    }

    function update(node, start, end, idx, char) {
        if (start === end) {
            tree[node] = createNode(char);
            return;
        }
        const mid = (start + end) >> 1;
        const leftNode = node << 1;
        const rightNode = leftNode | 1;

        if (idx <= mid) {
            update(leftNode, start, mid, idx, char);
        } else {
            update(rightNode, mid + 1, end, idx, char);
        }

        tree[node] = merge(tree[leftNode], tree[rightNode], mid - start + 1, end - mid);
    }

    build(1, 0, n - 1);

    const k = queryIndices.length;
    const ans = new Array(k);

    for (let i = 0; i < k; i++) {
        update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
        ans[i] = tree[1].max_len;
    }

    return ans;
};