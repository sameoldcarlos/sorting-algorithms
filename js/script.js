import { less, exchange } from './utils/commonFunctions.js'

function selectionSort(numbersArray, left, right) {
  let minIndex = left

  for (let index = left; index < right; index++) {
    for (let nextIndex = index + 1; nextIndex <= right; nextIndex++) {
      if (less(numbersArray[nextIndex], numbersArray[minIndex])) {
        minIndex = nextIndex
      }
    }

    exchange(numbersArray, index, minIndex)
  }
}

function recusiveSelectionSort(numbersArray, left, right) {
  if  (left === right) {
    return
  }

  let minIndex = left

  for (let index = left + 1; index <= right; index++) {
    if (less(numbersArray[index], numbersArray[minIndex])) {
      minIndex = index
    }
  }

  exchange(numbersArray, minIndex, left)

  recusiveSelectionSort(numbersArray, left + 1, right)
}

function bubbleSort(numbersArray, left, right) {
  for (let i = left; i < right; i++) {
    for (let j = left; j < right; j++) {
      if (less(numbersArray[j+1], numbersArray[j])) {
        exchange(numbersArray, j + 1, j)
      }
    }
  }
}
