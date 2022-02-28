const list = document.querySelector('.list');
const listItems = document.querySelector('li');

function addListItem(item) {
  let el = document.createElement('li');
  list.appendChild(el);
  el.textContent = `${item}`;
}

addListItem('item 1');
addListItem('item 2');

listItems.style.listStyleType = 'none';
