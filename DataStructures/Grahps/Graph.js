class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removingEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(connection => connection !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(connection => connection !== vertex1);
    }
    removingVertex(vertex1){
        for(let x of this.adjacencyList[vertex1]) {
            this.removingEdge(vertex1, x)
        }
        delete this.adjacencyList[vertex1];
    }
}

const newG = new Graph();
newG.addVertex('Tokyo');
newG.addVertex('USA');
newG.addVertex('Colombia');
newG.addVertex('Mexico');
newG.addEdge('Tokyo', 'USA');
newG.addEdge('Colombia', 'USA');
newG.addEdge('Colombia', 'Mexico');
newG.addEdge('USA', 'Mexico');
newG.removingEdge('USA', 'Tokyo');
newG.removingVertex('Colombia');
console.log(newG)
