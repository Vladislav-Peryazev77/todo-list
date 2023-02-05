"use strict";
let createNewTodo = document.querySelector('.block__input-text');
let mainTask = document.querySelector('.main__tasks');
let interplay = mainTask.querySelector('.interplay');


createNewTodo.addEventListener('blur', function func() {
  let task = document.createElement('div');
  task.classList.add('block');
  task.classList.add('tasks__task');
  task.id = 'task';
  mainTask.insertAdjacentElement('afterBegin', task);
  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('block__input-checkbox');
  task.insertAdjacentElement('afterBegin', input);
  let label = document.createElement('label');
  label.classList.add('block__label');
  task.insertAdjacentElement('beforeEnd', label);
  let tasks = document.querySelectorAll('#task');
  for ( let i = 0; i < tasks.length; i++) {
    input.id = `checkbox${i + 1}`;
    label.setAttribute('for', `checkbox${i + 1}`);
  }
  let span = document.createElement('span');
  span.classList.add('task__description');
  span.textContent = this.value;
  task.insertAdjacentElement('beforeEnd', span);
  let button = document.createElement('button');
  button.classList.add('task__button');
  task.insertAdjacentElement('beforeEnd', button);
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  div1.classList.add('mark1');
  div2.classList.add('mark2');
  button.insertAdjacentElement('afterBegin', div1);
  button.insertAdjacentElement('beforeEnd', div2);
  button.addEventListener('click', function() {
    task.remove();
  });
  this.value = '';
  console.log(tasks.length);
});
// let taskButtonDone = document.querySelector('.block__input-checkbox')
// taskButtonDone.addEventListener('change', (event) => {
//   console.log('!!');
// });
// let labelBlock = document.querySelector('.block__label');
// labelBlock.addEventListener('click', function() {
//   taskButtonDone.checked = true;
//   console.log();
// });





