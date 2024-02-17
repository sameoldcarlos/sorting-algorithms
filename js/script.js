function selectionSort(numbersArray) {
  let minIndex, temp

  for (let index = 0; index < numbersArray.length - 1; index++) {
    minIndex = index

    for (let nextIndex = index + 1; nextIndex < numbersArray.length; nextIndex++) {
      if (numbersArray[nextIndex] < numbersArray[minIndex]) {
        minIndex = nextIndex
      }
    }

    temp = numbersArray[index]
    numbersArray[index] = numbersArray[minIndex]
    numbersArray[minIndex] = temp
  }
}

function recusiveSelectionSort(numbersArray, left, right) {
  if  (left === right) {
    return
  }

  let minIndex = left

  for (let index = left + 1; index <= right; index++) {
    if  (numbersArray[index] < numbersArray[minIndex]) {
      minIndex = index
    }
  }

  const temp = numbersArray[minIndex]
  numbersArray[minIndex] = numbersArray[left]
  numbersArray[left] = temp

  recusiveSelectionSort(numbersArray, left + 1, right)
}
