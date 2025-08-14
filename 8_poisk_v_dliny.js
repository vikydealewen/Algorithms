// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A: [B,C], B:[D,F], ... }

//рекурсивно
function dfsHasPath(graph, start, goal, visited = new Set()) {
  if (start === goal) return true;

  visited.add(start);

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      if (dfsHasPath(graph, neighbor, goal, visited)) {
        return true;
      }
    }
  }

  return false;
}


//итеративно

function dfsHasPathIterative(graph, start, goal) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let vertex = stack.pop();

    if (vertex === goal) return true;
    if (!visited.has(vertex)) {
      visited.add(vertex);

      for (let neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  
  return false;
}
