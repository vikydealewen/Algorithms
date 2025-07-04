//Поиск в ширину в графе
//Очередь - первый вошел первый вышел

//Проверяем есть ли путь и находим короткий путь 
//аналогия поиска в ширину - матрица смежности (массив массивов)

const matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while(queue.length > 0) {
      const current = queue.shift();

      if(!graph[current]) {
        //из этой вершины нет пути
        graph[current] = []
      }
      if(graph[current].includes(end)) {
        //путь в вершину есть
        return true
      } else {
        queue = [...queue, ...graph[current]]
      }
  }

  return false
}

console.log(breadthSearch(graph, 'a', 'h'));