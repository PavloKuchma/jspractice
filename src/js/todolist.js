const form = document.querySelector('.todo');
const list = document.querySelector('.todo__items');
let data = {};
const KEY = 'todo';

form.addEventListener('input', saveData);

function saveData(event) {
  const { name, value } = event.target;

  data[name] = value;
  console.log(data);
  localStorage.setItem(KEY, JSON.stringify(data));
}
