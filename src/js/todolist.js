import throttle from 'lodash.throttle';

const form = document.querySelector('.todo');
const list = document.querySelector('.todo__items');
const KEY = 'todo';
let data = JSON.parse(localStorage.getItem(KEY)) || {};
if (data) {
  for (let key in data) {
    form[key].value = data[key];
  }
}
form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', onSubmit);

function saveData(event) {
  const { name, value } = event.target;

  data[name] = value;
  console.log(data);
  localStorage.setItem(KEY, JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  const { text, priority } = data;
  if (!text || !priority) {
    return alert('Enter all fields');
  }
  const markup = `<li>TO DO: ${text}, priority: ${priority}</li>`;
  list.insertAdjacentHTML('afterbegin', markup);
  form.reset();
  localStorage.removeItem(KEY);
  data = {};
}
