let itemInput = document.getElementById('itemInput');
let addBtn = document.getElementById('addBtn');
let list = document.getElementById('list');
  
function add(){

  let value = itemInput.value;

  if(value === '') return; // prevent empty items
const li = document.createElement('li');

  li.textContent = value;

  list.appendChild(li);

  itemInput.value = ''; // clear input
function remove(){
    li.remove()
}
li.addEventListener('click',remove)
}

addBtn.addEventListener('click', add);