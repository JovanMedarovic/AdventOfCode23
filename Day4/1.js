const unclearData = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

preproccessingData = () => {
  // seperate cards by new lines
  const cardsWithPrefix = unclearData.split('\n');
  // remove 'Card x:' prefix
  const cardsAndNumbersTogether = cardsWithPrefix.map(card => card.split(':')[1].trim(' '));
  // seperated into cards and winning numbers arrays for each card
  const cardsAndNumbersSeperated = cardsAndNumbersTogether.map(
    card => (
      {
        winningNumbers: card.split('|')[0].trim(' ').split(' ').map(number => +number),
        yourNumbers: card.split('|')[1].trim(' ').split(' ').map(number => +number),
      }
    ));
  return cardsAndNumbersSeperated;
}

const allCards = preproccessingData();

const numbersOfMatching = allCards.map(card => {
  let numberOfMatching = 0;
  card.yourNumbers.forEach(yourNumber => {
    if (card.winningNumbers.find(winningNumber => yourNumber === winningNumber)) {
      numberOfMatching++;
    }
  });
  return numberOfMatching;
});

const calculatedPointsPerCard = numbersOfMatching.map(matching => matching > 0 ? Math.pow(2, matching - 1) : 0);
const sumResoult = calculatedPointsPerCard.reduce((previos, current) => previos + current);

console.log(sumResoult);