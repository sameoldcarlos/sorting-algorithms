export function key(item) {
  return item.key || item
}

export function less(firstItem, secondItem) {
  return key(firstItem) < key(secondItem)
}

export function exchange(firstItem, secondItem) {
  const temp = firstItem
  firstItem = secondItem
  secondItem = temp

  return [firstItem, secondItem]
}

export function compareAndExchange(firstItem, secondItem) {
  if (less(secondItem, firstItem)) {
    [firstItem, secondItem] = exchange(firstItem, secondItem)
  }

  return [firstItem, secondItem]
}
