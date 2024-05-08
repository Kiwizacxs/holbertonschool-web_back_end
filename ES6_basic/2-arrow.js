export default function getNeighborhoodsList() {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  const addNeighborhood = (newNeighborhoods) => {
      sanFranciscoNeighborhoods.push(newNeighborhoods);
      return sanFranciscoNeighborhoods;
  };
  return {
      addNeighborhood: addNeighborhood
}
}
