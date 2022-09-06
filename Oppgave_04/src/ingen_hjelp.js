//  Bruk getElementById til å hente HTML-elementene med #id
const descId = document.getElementById('desc');
const guessId = document.getElementById('guess');
const numbersId = document.getElementById('numbers');
//  Bruk querySelector til å hente knappen
const buttonId = document.querySelector('button');
//  Lag en liste med tallene som skal sorteres
const numbers = [4, 67, 2, 567, 8, 3, 7, 8, 3];
//  Lag en funksjon for å skrive ut tallene som skal sorteres
const addNumbersUI = () => {
  for (let number of numbers) {
    const li = document.createElement('li');
    li.innerHTML = number;
    numbersId.appendChild(li);
  }
};

//  Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const addInputUI = () => {
  for (let number of numbers) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    li.appendChild(input);
    guessId.appendChild(li);
  }
};

//  Lag en funksjon for å hente ut det brukeren har skrevet inn
const getGuess = () => {
  const guess = Array.from(guessId.querySelectorAll('input')).map(
    (input) => input.value
  );
  return guess;
};
//  Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkNumberSeq = () => {
  const guess = getGuess();
  const sortedNumbers = numbers.sort();
  const sortedGuess = guess.sort();
  if (sortedNumbers.join('') === sortedGuess.join('')) {
    descId.textContent = 'Du har sortert riktig!';
  } else {
    descId.textContent = 'Du har sortert feil!';
  }
};

//  Lag en funksjon som "lager UI" --Nødvendig?
const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

//  Lytt til 'click'-event og trigg checkNumberSeq ved klikk
buttonId.addEventListener('click', checkNumberSeq);
