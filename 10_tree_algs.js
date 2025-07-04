const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

// value (v) - значения
// childs (c) - дети


//рекурсивный подход

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if(!node.c) {
      return
    };

    sum += recursive(node.c);
  });

  return sum
}

console.log(recursive(tree));


//Итеративный подход - используется стек
const iteration = (tree) => {
  if(!tree.length) {
    return 0
  };

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;

    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }

  return sum;
}

console.log(iteration(tree));