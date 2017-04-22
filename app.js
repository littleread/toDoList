const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild;
    }
   if (event.target.className === 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      ul.insertBefore(li, prevLi);
    }                   
  }
});

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild;
     }
    if (event.target.className === 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }                   
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});
  
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  
  
  
  
  
  
  
  
  
  