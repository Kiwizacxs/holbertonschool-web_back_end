export default function appendToEachArrayValue(array, appendString) {
  let value;
  for (const idx of array) {
    value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
