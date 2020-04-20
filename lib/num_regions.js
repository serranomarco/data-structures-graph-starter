function numRegions(graph) {
    let visited = new Set()
    let count = 0;
    for (let node in graph) {
        if (numRegionsRecur(node, graph, visited)) count++;
    }
    return count;
}

function numRegionsRecur(node, graph, visited) {
    if (visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach(neighbor => {
        numRegionsRecur(neighbor, graph, visited);
    });
    return true;
}



module.exports = {
    numRegions
};
