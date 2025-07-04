const factorial = (n) => {
  if (n === 1) {
    return n
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

//Числа Фиббоначи - 1, 1, 2, 3, 5, 8, 13, 21
// n - номер числа в цепочке

const fibbonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibbonachi(n-1) + fibbonachi(n-2)
}

//Функция для "расплющивания" массива

// flat([1, [2, [3, [4,5]]]]); // => [1, 2, 3, 4, 5]

function flat(arr) {
  const flattered = [];
  
  for (const value of arr) {
    if (Array.isArray(value)) {
      flattered.push(...flat(value))
    } else {
      flattered.push(elem)
    }
  }

  return flattered
}