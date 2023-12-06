const insertNumberAtIndex = (str, number, index) => {
  return str.slice(0, index + 1) + number + str.slice(index + 1);
};

const findAndConvert = (string) => {
  const numberDataSets = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
    { value: 4, label: 'four' },
    { value: 5, label: 'five' },
    { value: 6, label: 'six' },
    { value: 7, label: 'seven' },
    { value: 8, label: 'eight' },
    { value: 9, label: 'nine' }];

  let insertedNumbersRow = string;
  numberDataSets.forEach(number => {
    let index = string.indexOf(number.label);
    while (index > -1) {
      insertedNumbersRow = insertNumberAtIndex(insertedNumbersRow, number.value, index);
      index = insertedNumbersRow.indexOf(number.label);
    }
  });
  return insertedNumbersRow;
};


// --- MAIN part

const data = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
const rows = data.split('\n');
const rowSums = rows.map(row => {
  const charArray = [...findAndConvert(row)];
  const firsNumber = charArray.find(char => !isNaN(char));
  const lastNumber = charArray.reverse().find(char => !isNaN(char));
  return +firsNumber * 10 + +lastNumber;
});
const resoult = rowSums.reduce((prev, current) => prev + current);
console.log(resoult);
