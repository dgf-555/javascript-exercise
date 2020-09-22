export default function collectCarNumberCount(collection) {
  const temp_array = collection.filter(i => new RegExp('^粤A.*$').test(i));
  return temp_array.length;
}
