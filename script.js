const list = document.querySelector('.list');
const listItems = document.querySelectorAll('li');
const listItemsArr = Array.from(listItems);
console.log(listItemsArr);

function addListItem(item) {
  let el = document.createElement('li');
  console.log(el);
  list.appendChild(el);
  el.textContent = `${item}`;
}

addListItem('item 1');
addListItem('item 2');

// listItems.style.listStyleType = 'none';

// listItemsArr.style.display = 'inline-block';
