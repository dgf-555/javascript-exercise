export default function numberMapToWord(collection) {
  return collection.map(i => String.fromCharCode(64 + parseInt(i)).toLowerCase());
}
