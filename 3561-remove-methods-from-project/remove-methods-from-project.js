/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    let graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (let i = 0; i < invocations.length; i++) {
        let u = invocations[i][0];
        let v = invocations[i][1];
        graph[u].push(v);
    }

    let suspicious = {};
    let queue = [k];
    suspicious[k] = true;

    while (queue.length > 0) {
        let current = queue.shift();
        let neighbors = graph[current];
        for (let i = 0; i < neighbors.length; i++) {
            let next = neighbors[i];
            if (!suspicious[next]) {
                suspicious[next] = true;
                queue.push(next);
            }
        }
    }

    let canRemove = true;
    for (let i = 0; i < invocations.length; i++) {
        let u = invocations[i][0];
        let v = invocations[i][1];
        if (!suspicious[u] && suspicious[v]) {
            canRemove = false;
            break;
        }
    }

    let result = [];
    if (canRemove) {
        for (let i = 0; i < n; i++) {
            if (!suspicious[i]) {
                result.push(i);
            }
        }
    } else {
        for (let i = 0; i < n; i++) {
            result.push(i);
        }
    }

    return result;
};