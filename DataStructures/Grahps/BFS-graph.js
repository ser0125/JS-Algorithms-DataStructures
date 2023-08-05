class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(name) {
      if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
    DFSIterative(vertex) {
        let s = [];
        let visitedVertices = {};
        let listResult = [];
        let v;
        s.push(vertex);
        visitedVertices[vertex] = true;
        while (s.length != 0) {
          v = s.shift();
          listResult.push(v);
          this.adjacencyList[v].forEach((neighbor) => {
            if (!visitedVertices[neighbor]) {
              visitedVertices[neighbor] = true;
              s.push(neighbor);
            }
          });
        }
        return listResult;
      }
    
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.DFSIterative("A"));
