"use strict";
const createNewTodo = document.querySelector('.block__input-text');
const mainTask = document.querySelector('.main__tasks');
const interplay = mainTask.querySelector('.interplay');

createNewTodo.addEventListener('change', function() {
  const template = document.querySelector('#element')
  let span = template.content.querySelector('.task__description');
  let tasks = document.querySelectorAll('.tasks');
  const input = template.content.querySelector('.block__input-checkbox');
  const label = template.content.querySelector('.block__label');
  for ( let i = 0; i < tasks.length; i++) {
      input.id = `checkbox${i + 1}`;
      label.setAttribute('for', `checkbox${i + 1}`);
  }

  span.textContent = createNewTodo.value;


  mainTask.insertAdjacentHTML('afterBegin', template.innerHTML);
  const button = document.querySelector('.task__button');
  const task = document.querySelector('.task');
  button.addEventListener('click', function() {
    task.remove();
  });


  // let task = document.createElement('div');
  // task.classList.add('block');
  // task.classList.add('tasks__task');
  // task.id = 'task';
  // mainTask.insertAdjacentElement('afterBegin', task);
  // let input = document.createElement('input');
  // input.setAttribute('type', 'checkbox');
  // input.classList.add('block__input-checkbox');
  // task.insertAdjacentElement('afterBegin', input);
  // let label = document.createElement('label');
  // label.classList.add('block__label');
  // task.insertAdjacentElement('beforeEnd', label);
  // let tasks = document.querySelectorAll('#task');
  // for ( let i = 0; i < tasks.length; i++) {
  //   input.id = `checkbox${i + 1}`;
  //   label.setAttribute('for', `checkbox${i + 1}`);
  // }
  // let span = document.createElement('span');
  // span.classList.add('task__description');
  // span.textContent = this.value;
  // task.insertAdjacentElement('beforeEnd', span);
  // let button = document.createElement('button');
  // button.classList.add('task__button');
  // task.insertAdjacentElement('beforeEnd', button);
  // let div1 = document.createElement('div');
  // let div2 = document.createElement('div');
  // div1.classList.add('mark1');
  // div2.classList.add('mark2');
  // button.insertAdjacentElement('afterBegin', div1);
  // button.insertAdjacentElement('beforeEnd', div2);
  // button.addEventListener('click', function() {
  //   task.remove();
  // });
  this.value = '';
  const element = mainTask.querySelectorAll('.block__input-checkbox');
  let taskAmount = document.querySelector('.task__amount');
  if ([...element].filter((input) => input.checked === false).length === 1) {
    taskAmount.textContent = `${[...element].filter((input) => input.checked === false).length} item left`;
  } else {
    taskAmount.textContent = `${[...element].filter((input) => input.checked === false).length} items left`;
  }
});



