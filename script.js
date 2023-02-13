"use strict";
const createNewTodo = document.querySelector('.block__input-text');
const mainTask = document.querySelector('.main__tasks');
const interplay = mainTask.querySelector('.interplay');

createNewTodo.addEventListener('change', function() {
  // добавление таски
  const template = document.querySelector('#element')
  let span = template.content.querySelector('.task__description');
  let tasks = document.querySelectorAll('.tasks');
  const input = template.content.querySelector('.block__input-checkbox');
  const label = template.content.querySelector('.block__label');
  // цикл для смены id и for, чтобы чекбоксы работали исправно
  for ( let i = 0; i < tasks.length; i++) {
      input.id = `checkbox${i + 1}`;
      label.setAttribute('for', `checkbox${i + 1}`);
  }
  span.textContent = createNewTodo.value;
  mainTask.insertAdjacentHTML('afterBegin', template.innerHTML);
  const button = document.querySelector('.task__button');
  const task = document.querySelector('.task');
  // кнопка удаления таски
  button.addEventListener('click', function() {
    task.remove();
    // обновление инфы для счетчика
    updateTaskAmount();
  });
  this.value = '';
  let elem = mainTask.querySelector('.block__input-checkbox');
  let taskAmount = document.querySelector('.task__amount');
  // обновление инфы для счетчика
  elem.addEventListener('change', function() {
    updateTaskAmount();
  });
  // обновление инфы для счетчика
  taskAmount.textContent = `${checkAmountOfCheckbox()} item left`;
  // добавил возможность редактировать текст таски
  const spans = document.querySelectorAll('.task__description');
  spans.forEach((span) => {
    span.addEventListener('click', function func() {
      let input = document.createElement('input');
      input.value = span.textContent;
      span.textContent = '';
      span.appendChild(input);
      // input.focus();

      input.addEventListener('change', function() {
        span.textContent = this.value;
        span.addEventListener('click', func)
      });
      span.removeEventListener('click', func);
    });
  });
});
// функция для подсчета оставшихся задачь
function checkAmountOfCheckbox() {
  let element = mainTask.querySelectorAll('.block__input-checkbox');
  let count = [...element].filter((input) => input.checked === false).length;
  return count;
}
// функция для обновления инфы о оставшихся задачах
function updateTaskAmount() {
  const taskAmount = document.querySelector('.task__amount');
  const amount = checkAmountOfCheckbox();
  if (amount > 1) {
    taskAmount.textContent = `${amount} items left`;
  } else {
    {taskAmount.textContent = `${amount} item left`}
  }
}
// кнопка удаления всех выполненых задач
const clearComleted = document.querySelector('.task__clear');
clearComleted.addEventListener('click', function() {
  const input = mainTask.querySelectorAll('.block__input-checkbox');
  const tasks = document.querySelectorAll('.task');
  const completedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked);
  for ( let task of completedTask) {
    task.remove();
  }
});
const allTasks = document.querySelector('.interaction__select-all');
const activeTasks = document.querySelector('.interaction__select-active');
const completedTasks = document.querySelector('.interaction__select-completed');
// кнопка чтобы были видны все задачи
allTasks.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task');
  for (let task of tasks) {
    task.classList.remove('hidden-tasks');
    task.classList.add('all-tasks');
  }
  completedTasks.classList.remove('selected');
  activeTasks.classList.remove('selected');
  allTasks.classList.add('selected');

});
// кнопка чтобы были видны только не выполненные задачи
activeTasks.addEventListener('click', function() {
  const input = mainTask.querySelectorAll('.block__input-checkbox');
  const tasks = document.querySelectorAll('.task');
  const completedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked);
  for ( let task of completedTask) {
    task.classList.remove('all-tasks');
    task.classList.add('hidden-tasks')
  }
  const unCompletedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked === false);
  for ( let task of unCompletedTask) {
    task.classList.remove('hidden-tasks');
  }
  allTasks.classList.remove('selected');
  completedTasks.classList.remove('selected');
  activeTasks.classList.add('selected');

});
// кнопка чтобы были видны только выполненные задачи
completedTasks.addEventListener('click', function() {
  const input = mainTask.querySelectorAll('.block__input-checkbox');
  const tasks = document.querySelectorAll('.task');
  const unCompletedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked === false);
  for ( let task of unCompletedTask) {
    task.classList.remove('all-tasks');
    task.classList.toggle('hidden-tasks');
  }
  const completedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked);
  for ( let task of completedTask) {
    task.classList.remove('hidden-tasks');
  }
  allTasks.classList.remove('selected');
  activeTasks.classList.remove('selected');
  completedTasks.classList.add('selected');
});
// кнопка смены темы
const themeSwitcher = document.querySelector('.header__button');
themeSwitcher.addEventListener('click', function() {
  let theme = document.getElementById('theme');
  if ( theme.getAttribute('href') == './styles/styles.css') {
    theme.href = './styles/dark-theme.css';
  } else {
    theme.href = './styles/styles.css'
  }
});
// из-за того что я объединял блоки в один на декстопной версии нужно
// привязать события и к тому блоку который идет отдельно в мобильной версии
const allTasksMobile = document.querySelector('.mobile-interaction__select-all');
const activeTasksMobile = document.querySelector('.mobile-interaction__select-active');
const completedTasksMobile = document.querySelector('.mobile-interaction__select-completed');
// кнопка чтобы были видны все задачи на мобильной версии
allTasksMobile.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task');
  for (let task of tasks) {
    task.classList.remove('hidden-tasks');
    task.classList.add('all-tasks');
  }
  completedTasksMobile.classList.remove('selected');
  activeTasksMobile.classList.remove('selected');
  allTasksMobile.classList.add('selected');
});
// кнопка чтобы были видны только не выполненные задачи на мобильной версии
activeTasksMobile.addEventListener('click', function() {
  const input = mainTask.querySelectorAll('.block__input-checkbox');
  const tasks = document.querySelectorAll('.task');
  const completedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked);
  for ( let task of completedTask) {
    task.classList.remove('all-tasks');
    task.classList.add('hidden-tasks')
  }
  const unCompletedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked === false);
  for ( let task of unCompletedTask) {
    task.classList.remove('hidden-tasks');
  }
  allTasksMobile.classList.remove('selected');
  completedTasksMobile.classList.remove('selected');
  activeTasksMobile.classList.add('selected');
});
// кнопка чтобы были видны только выполненные задачи на мобильной версии
completedTasksMobile.addEventListener('click', function() {
  const input = mainTask.querySelectorAll('.block__input-checkbox');
  const tasks = document.querySelectorAll('.task');
  const unCompletedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked === false);
  for ( let task of unCompletedTask) {
    task.classList.remove('all-tasks');
    task.classList.toggle('hidden-tasks');
  }
  const completedTask = [...tasks].filter((task) => task.querySelector('.block__input-checkbox').checked);
  for ( let task of completedTask) {
    task.classList.remove('hidden-tasks');
  }
  allTasksMobile.classList.remove('selected');
  activeTasksMobile.classList.remove('selected');
  completedTasksMobile.classList.add('selected');
});

