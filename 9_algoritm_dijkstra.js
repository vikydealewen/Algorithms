const graph = {};
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
  //таблица с кратчайшими путями
  const costs = {};
  //проверенные узлы
  const processed = [];
  //соседние узлы просматриваемой вершины
  let neighbors = {};

  //вершины, в которые можем попасть со стартовой
  Object.keys(graph).forEach(node => {
    if(node !== start) {
      let value = graph[start][node];
      //если есть путь в эту точку из вершины, 
      // то указываем дилну пути, если нет, 
      // то указываем бесконечно большое число
      costs[node] = value || 10000000;
    }
  });

  //узел с кратчайшим расстоянием до него
  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach(neighbor => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    })
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  return costs
}

//Находим минимальный размер пути из имеющихся в массиве
function findNodeLowestCost(costs, processed) {
  let lowestCost = 10000000;
  let lowestNode;
  Object.keys(costs).forEach(node => {
    let cost = costs[node];
    //если размер пути меньше заданного значения и вершина не находится в списке обработанных
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  })

  return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));