const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      
      count += 1;
    }
    
    //Поменяли элементы местами
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array
}

console.log(selectionSort(array));
console.log('count = ', count);