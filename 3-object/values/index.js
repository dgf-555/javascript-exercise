export default function countTypesNumber(source) {
  const sourcearray = Object.values(source);
  let answer = 0;
  for (let i = 0; i < sourcearray.length; i++) {
    answer += parseInt(sourcearray[i]);
  }
  return answer;
}
