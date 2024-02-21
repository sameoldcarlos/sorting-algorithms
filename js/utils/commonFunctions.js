export function key(item) {
  return item.key || item
}

export function less(firstItem, secondItem) {
  return key(firstItem) < key(secondItem)
}

export function exchange(array, firstItem, secondItem) {
  const temp = array[firstItem]
  array[firstItem] = array[secondItem]
  array[secondItem] = temp
}

export function compareAndExchange(firstItem, secondItem) {
  if (less(secondItem, firstItem)) {
    exchange(firstItem, secondItem)
  }
}
