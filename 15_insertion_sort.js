const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;


//сортировка вставками

const insertionSort = arr => {
  l = arr.length;

  for (let i = 1; i < l; i++) {
    const current = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = current;
    count += 1;
  }

  return arr;
};

console.log(array.length);
console.log(insertionSort(array));
console.log('count = ', count);