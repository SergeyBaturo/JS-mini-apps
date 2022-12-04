const taskName = document.querySelector('.task-name');
const ul = document.querySelector('ul');
const form = document.querySelector('#add');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.innerText = taskName.value;
  let cross = document.createElement('button');
  cross.style = 'width: 20px, height: 20px';
  cross.innerText = 'X';
  li.appendChild(cross);
  li.prepend(checkBox);
  ul.appendChild(li);
  checkBox.addEventListener('click', () => {
    li.classList.toggle('throughed');
    if (checkBox.checked) {
      ul.append(li);
    } else {
      ul.prepend(li);
    }
  });
  cross.addEventListener('click', () => {li.remove()});
  taskName.value = '';
});