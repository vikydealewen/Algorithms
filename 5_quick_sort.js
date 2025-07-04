// const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
const array = [0, 10, 2, 5, 8, 6];
let count = 0

function quickSort(arr) {
  //Базовый случай
  if (arr.length <= 1) {
    return arr
  }

  //опорный элемент - средний
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    count += 1;

    if(i === pivotIndex)
      continue

    if(arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array));
console.log('count = ', count);


//реализация с перестановками, мутация исходного массива

const partition = (arr, start, end) => {
  const pivot = arr[end]; // Определяем опорный элемент
  let i = start; // Определяем индекс, по которому делим массив на две части

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем значения переменных
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]]; // Меняем значения переменных
  console.log(i, arr);
  return i;
};

const quickSortOther = (arr, start, end) => {
  if (start < end) { // Условия запуска рекурсии
    const pi = partition(arr, start, end); // Получаем индекс
    console.log(pi);

    quickSortOther(arr, start, pi - 1);
    quickSortOther(arr, pi + 1, end);
  }
};

console.log(quickSortOther(array, 0, 5));


//3 реализация

var items = [5,3,7,6,2,9];

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {

    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j); //swapping two elements
      i++;
      j--;
    }
  }

  return i;
}

function quickSortOth(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition

    if (left < index - 1) { //more elements on the left side of the pivot
      quickSortOth(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSortOth(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]