/**  I denne oppgaven skal du så fort du klarer skrive ordet som dukker
 * opp etter klikk på startknappen. Hvis du skriver feil bli antall
 * feil oppdatert. Brukeren skal hele tiden se hvilken bokstav de
 * har skrevet. Hvis de har skrevet riktig ord skal nytt ord dukke opp.
 */
//  Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
// - posisjonen til bokstaven du skal skrive
// - ordet som skal vises
let numberOfErrors = 0;
let positionOfLetterToWrite = 0;
let wordCounter = 0;
//  Lag en liste med ulike ord
const wordList = [
  'CIGAR',
  'REBUT',
  'SISSY',
  'HUMPH',
  'AWAKE',
  'BLUSH',
  'FOCAL',
  'EVADE',
  'NAVAL',
  'SERVE',
  'HEATH',
  'DWARF',
  'MODEL',
  'KARMA',
  'STINK',
  'GRADE',
  'QUIET',
  'BENCH',
  'ABATE',
  'FEIGN',
  'MAJOR',
  'DEATH',
  'FRESH',
  'CRUST',
  'STOOL',
  'COLON',
  'ABASE',
  'MARRY',
  'REACT',
  'BATTY',
  'PRIDE',
  'FLOSS',
  'HELIX',
  'CROAK',
  'STAFF',
  'PAPER',
  'UNFED',
  'WHELP',
  'TRAWL',
  'OUTDO',
  'ADOBE',
  'CRAZY',
  'SOWER',
  'REPAY',
  'DIGIT',
  'CRATE',
  'CLUCK',
  'SPIKE',
  'MIMIC',
  'POUND',
  'MAXIM',
  'LINEN',
  'UNMET',
  'FLESH',
];
//  Hent ut HTML #id og knappen
const wordId = document.getElementById('word');
const letterId = document.getElementById('letter');
const wrongsId = document.getElementById('wrongs');
const btn = document.getElementsByTagName('button')[0];
//  Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
function setWord() {
  wordId.innerHTML = wordList[wordCounter];
}
//  Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
function changeWord() {
  positionOfLetterToWrite = 0;
  wordCounter++;
  setWord();
}
//  Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
function checkPosition(word, position, letter) {
  if (word[position] === letter) {
    return true;
  }
  return false;
}
//  Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
function checkIfWordIsDone(word, position) {
  if (position === word.length && word === wordList[wordCounter]) {
    return true;
  }
  return false;
}
//  Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
function handleKeyUp(key) {
  const word = wordList[wordCounter];
  if (checkPosition(word, positionOfLetterToWrite, key)) {
    positionOfLetterToWrite++;
    if (checkIfWordIsDone(word, positionOfLetterToWrite)) {
      changeWord();
    }
  } else {
    numberOfErrors++;
  }
  updateUI(key);
}
//  Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
function updateUI(key) {
  wrongsId.innerHTML = numberOfErrors;
  letterId.innerHTML = key;
  wordId.innerHTML = wordList[wordCounter];
}
//  Lytt til keyup på window
window.addEventListener('keyup', (e) => {
  handleKeyUp(e.key.toUpperCase());
});
//  Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
btn.addEventListener('click', () => {
  btn.disabled = true;
  setWord();
});
