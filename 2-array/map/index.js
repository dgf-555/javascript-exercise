export default function numberMapToWord(collection) {
  const temp_array = collection.map(i => String.fromCharCode(64 + parseInt(i)).toLowerCase());
  return temp_array;
}
