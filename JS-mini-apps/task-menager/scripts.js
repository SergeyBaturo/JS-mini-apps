const taskName = document.querySelector('.task-name');
const add = document.querySelector('#add');
const ul = document.querySelector('ul');

add.addEventListener('click', () => {
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
    if (li.classList == 'troughed') {
      ul.prepend(li);
    } else {
      ul.appendChild(li);
    }
  });
  cross.addEventListener('click', () => {li.remove()});
  taskName.value = '';
});