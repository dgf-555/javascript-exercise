function chooseMultiplesOfThree(collection) {
  const temp_array = collection.filter(i => i % 3 === 0);
  return temp_array;
}

function chooseNoRepeatNumber(collection) {
  const temp_array = collection.filter(function(item, index, self) {
    return self.indexOf(item) == index;
  });
  return temp_array;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
