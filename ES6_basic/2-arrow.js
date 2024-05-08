export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  const addNeighborhood = (newNeighborhoods) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhoods);
      return this.sanFranciscoNeighborhoods;
  };
  return {
      addNeighborhood: addNeighborhood
}
}
