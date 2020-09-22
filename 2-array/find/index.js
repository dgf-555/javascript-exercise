export default function find00OldPerson(collection) {
  const temp_array = collection.find(i => i.age < 20);
  return temp_array.name;
}
