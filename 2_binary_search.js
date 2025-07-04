const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

//Реализация с помощью цикла
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  //флаг нахождения элемента
  let found = false;
  //позиция самого элемента
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end)/ 2);
    if(array[middle] === item) {
      found = true;
      position = middle;
      return position
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1
    }
  }

  return position;
}

//Реализация с помощью рекурсии
function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end)/ 2);
  count += 1;

  if (item === arr[middle]) {
    return middle
  }

  if (item < arr[middle]) {
    return recursiveBinarySearch(arr, item, start, middle - 1)
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end);
  }
}


console.log(binarySearch(array, 1));
console.log('count = ', count);

console.log(recursiveBinarySearch(array, 3, 0, 16));
console.log('count = ', count);