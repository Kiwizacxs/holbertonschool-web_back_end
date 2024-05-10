export default function appendToEachArrayValue(array, appendString) {
  let value;
  for (let idx in array) {
    value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}