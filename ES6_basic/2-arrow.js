export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  this.addNeighborhood = (newNeighborhoods) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhoods);
      return this.sanFranciscoNeighborhoods;
  };
  return {
      addNeighborhood: this.addNeighborhood
}
}
