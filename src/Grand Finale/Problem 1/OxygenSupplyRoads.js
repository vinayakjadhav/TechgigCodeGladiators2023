process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var output = "NOT POSSIBLE";
var cacheFares = {};
process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  var H;
  var M;
  var costsGraphMatrix = [];
  var roadExist;
  var largestMin = Number.NEGATIVE_INFINITY;
  input_stdin_array = input_stdin.split("\r\n");
  /// console.log(input_stdin_array)
  const started = Date.now();
  //Write code here
  H = +input_stdin_array[0].split(" ")[0];
  M = +input_stdin_array[0].split(" ")[1];
  input_currentline = 1;

  for (var i = 0; i < H; i++) {
    var line = input_stdin_array[input_currentline++].split(" ");

    costsGraphMatrix[+line[0] - 1] = costsGraphMatrix[+line[0] - 1] || [];
    costsGraphMatrix[+line[0] - 1][+line[1] - 1] = 1;

  }
  console.log("H, M ", H, M);
  for (var i = 1; i <= H; i++) {
    cacheFares[i] = 0;
  }
  // console.log("cacheFares ", cacheFares);

  console.log("costsGraphMatrix ", costsGraphMatrix);
  var costFare;
  var dists;
  var newRoads = -1;
  while (true) {
    dists = dijkstra(costsGraphMatrix, 0);
    var still = dists.filter(f => f > M);
    if (!still.length) {
      break;
    }
    var newIn = dists.indexOf(Math.max(...dists));
    costsGraphMatrix[0][newIn] = 1;
    newRoads++;
    console.log("dists ", dists, newIn);
  }

  function dijkstra(graph, start) {

    //This contains the distances from the start node to all other nodes
    var distances = [];
    var dummy = [];
    //Initializing with a distance of "Infinity"
    for (var i = 0; i < graph.length; i++) distances[i] = Number.MAX_VALUE;
    //The distance from the start node to itself is of course 0
    distances[start] = 0;

    //This contains whether a node was already visited
    var visited = [];

    //While there are nodes left to visit...
    while (true) {
      // ... find the node with the currently shortest distance from the start node...
      var shortestDistance = Number.MAX_VALUE;
      var shortestIndex = -1;
      for (var i = 0; i < graph.length; i++) {
        //... by going through all nodes that haven't been visited yet
        if (distances[i] < shortestDistance && !visited[i]) {
          shortestDistance = distances[i];
          shortestIndex = i;
        }
      }

      //  console.log("Visiting node " + shortestDistance + " with current distance " + shortestDistance);

      if (shortestIndex === -1) {
        // There was no node not yet visited --> We are done
        return distances;
        // return dummy;
      }

      //...then, for all neighboring nodes....
      for (var i = 0; i < graph[shortestIndex].length; i++) {
        //...if the path over this edge is shorter...
        if (graph[shortestIndex][i] !== 0 && distances[i] > distances[shortestIndex] + graph[shortestIndex][i]) {
          //...Save this path as new shortest path.
          distances[i] = distances[shortestIndex] + graph[shortestIndex][i];
          //  dummy[i] = graph[shortestIndex][i] - distances[shortestIndex] > 0 ? graph[shortestIndex][i] - distances[shortestIndex] : distances[shortestIndex];
          //    console.log("Updating distance of node " + i + " to " + distances[i]);
        }
      }
      // Lastly, note that we are finished with this node.
      visited[shortestIndex] = true;
      console.log("Visited nodes: " + visited);
      console.log("Currently lowest distances: " + distances);

    }
  };

  output = newRoads || output;

  /// console.log("output ", output);
  //  output = output.reduce((total, num) => total + Math.round(num), 0);
  /// console.log(output);
  process.stdout.write("" + output + "\n");
  const gone = Date.now() - started;
  // console.log("\n\nTime taken", gone / 1000, 's.');
});