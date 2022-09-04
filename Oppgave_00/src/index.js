// Oppgave 1
const removeBtn = document.getElementById('remove-btn');

removeBtn.addEventListener('click', function () {
  const elementToRemove = document.getElementById('remove');
  elementToRemove.remove();
});
// Oppgave 2
const changeTextBtn = document.getElementById('change-btn');
changeTextBtn.addEventListener('click', function () {
  const elementToChange = document.getElementById('change');
  elementToChange.innerText = 'Hello World!';
});
// Oppgave 3
const textInput = document.getElementById('input');
textInput.addEventListener('input', function () {
  const paragraphToUpdate = document.getElementById('input-text');
  paragraphToUpdate.innerText = textInput.value;
});
// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const printListBtn = document.getElementById('write-list');
printListBtn.addEventListener('click', function () {
  const list = document.getElementById('ul');
  myList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
  });
});
// Oppgave 5
const createElementByn = document.getElementById('create');
createElementByn.addEventListener('click', function () {
  const selectValue = document.getElementById('select').value;
  const textToSetForElement = document.getElementById('text').value;
  const newElement = document.createElement(selectValue);
  newElement.innerText = textToSetForElement;
  const parentElement = document.getElementById('placeholder');
  parentElement.appendChild(newElement);
});
// Oppgave 6
const removeElementFromListBtn = document.getElementById('remove-li');
removeElementFromListBtn.addEventListener('click', function () {
  const listToRemoveFrom = document.getElementById('list');
  listToRemoveFrom.removeChild(listToRemoveFrom.lastElementChild);
});
// Oppgave 7
const nameInput = document.getElementById('name');
const orderBtn = document.getElementById('order');

nameInput.addEventListener('input', function () {
  if (nameInput.value.length > 4) {
    orderBtn.disabled = true;
    orderBtn.style.border = '2px solid red';
  } else {
    orderBtn.disabled = false;
    orderBtn.style.border = '1px solid #ccc';
  }
});
// Oppgave 8
const childElements = document.getElementsByClassName('children')[0].children;
const changeColorBtn = document.getElementById('color');

changeColorBtn.addEventListener('click', function () {
  for (let i = 0; i < childElements.length; i++) {
    if (i % 2 === 0) {
      childElements[i].style.border = '2px solid pink';
    } else {
      childElements[i].style.border = '2px solid green';
    }
  }
});
