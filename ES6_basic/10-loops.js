export default function appendToEachArrayValue(array, appendString) {
  for (let idx in array) {
    value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
