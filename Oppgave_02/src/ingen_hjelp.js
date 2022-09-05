import { users } from './util.js';

//  Hent HTML #id med getElementById
const searchInputId = document.getElementById('name');
const filterInputId = document.getElementById('age');
const filterButtonId = document.getElementById('filter');
const userUlId = document.getElementById('users');

//  Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
function createTableUI(listOfUsers) {
  userUlId.innerHTML = null;
  userUlId.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  listOfUsers.forEach((user) => {
    userUlId.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  });
}

//  Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
function handleSearch() {
  const searchName = searchInputId.value;
  if (searchName) {
    const searchResult = users.find((user) => user.name.includes(searchName));
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUlId.innerHTML = `<li>Fant ingen brukere med navn ${searchName}</li>`;
    }
  } else {
    createTableUI(users);
  }
}

//  Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
function handleFilter() {
  const filterValue = filterInputId.value;
  if (filterValue && !isNaN(filterValue)) {
    const filterResult = users.filter((user) => user.age > filterValue);
    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUlId.innerHTML = `<li>Fant ingen brukere med alder over ${filterValue}</li>`;
    }
  } else {
    createTableUI(users);
  }
}

function main() {
  createTableUI(users);
}
main();
//  Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInputId.addEventListener('keyup', handleSearch);
//  Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButtonId.addEventListener('click', handleFilter);
