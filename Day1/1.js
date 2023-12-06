const data = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
const rows = data.split('\n');
const rowSums = rows.map((row) => {
  const charArray = [...row];
  const firsNumber = charArray.find(char => !isNaN(char));
  const lastNumber = charArray.reverse().find(char => !isNaN(char));
  return +firsNumber * 10 + +lastNumber;
});
const resoult = rowSums.reduce((prev, current) => prev + current);
console.log(resoult);