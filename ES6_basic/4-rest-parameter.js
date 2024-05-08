export default function returnHowManyArguments(...args) {
  let x = 0
  for (let arg in args) {
    x = x + 1;
  }
  return x;
}
