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

  return numbersArray
}
