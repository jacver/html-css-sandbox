const list = document.querySelector('.list');
const listItems = document.querySelector('li');

function addListItem(item) {
  let el = document.createElement('li');
  console.log(el);
  list.appendChild(el);
  el.textContent = `${item}`;
}

addListItem('item 1');
addListItem('item 2');

listItems.style.listStyleType = 'none';

listItems.style.display = 'inline-block';
