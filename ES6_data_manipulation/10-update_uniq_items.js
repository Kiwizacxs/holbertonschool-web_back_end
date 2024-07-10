export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (let [item, cantidad] of groceryMap) {
    if (cantidad === 1) {
      groceryMap.set(item, 100);
    }
  }
}
