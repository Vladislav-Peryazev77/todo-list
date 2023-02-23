"use strict";
const tasksList = [
  'полить цветы', 'пройти туториал по реакту', 'помыть посуду'
];

const createNewTaskFormElement = document.querySelector('.block__form');
const createNewTaskInputElement = createNewTaskFormElement.querySelector('.block__input-text');

const tasksListElement = document.querySelector('.main__tasks');


let editableElement = null;

function handleEdit() {
  const taskDescriptionElement = editableElement.querySelector('.task__description');
  taskDescriptionElement.textContent = createNewTaskInputElement.value;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const taskDecription = createNewTaskInputElement.value;
  if ( editableElement !== null) {
    handleEdit();
  } else {
    renderTask(taskDecription);
  }
  createNewTaskInputElement.value = '';
}

createNewTaskFormElement.addEventListener('submit', handleFormSubmit);

const taskTemplateContent = document.querySelector('#task-template').content;

function handleDeleteButtonClick(event) {
  const taskElement = event.target.closest('.tasks__task');
  taskElement.remove();
}

function createTaskElement(taskDescription) {
  const taskBlockElement = taskTemplateContent.cloneNode(true);

  const taskCheckBoxElement = taskBlockElement.querySelector('.block__input-checkbox');
  const taskDescriptionElement = taskBlockElement.querySelector('.task__description');
  function handleDescriptionClick(event) {
    createNewTaskInputElement.focus();
    createNewTaskInputElement.value = taskDescriptionElement.textContent;
    editableElement = event.target.closest('.tasks__task');
  }
  taskDescriptionElement.addEventListener('click', handleDescriptionClick)
  const taskDeleteButtonElement = taskBlockElement.querySelector('.task__button');
  taskDescriptionElement.textContent = taskDescription;
  taskDeleteButtonElement.addEventListener('click', handleDeleteButtonClick);

  return taskBlockElement;
}

function renderTask(taskDecription) {
  const taskElement = createTaskElement(taskDecription);
  tasksListElement.prepend(taskElement);
}

// function renderTasks(tasksList) {
//   tasksList.forEach(renderTask);
// }

// renderTasks(tasksList);


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


function getAllTodos() {
  const result = fetch(TODOS_URL, {
    method: 'GET',
  });
  result
        .then((response) => {
          if (!response.ok) {
            throw new Error('Ошибка запроса')
          }
          return response.json();
        })
        .then((todos) => {
          console.log(todos);
          todos.forEach((todo) => {
            const todoHTML = renderTask(todo.title);
          });
        })
        .catch((error) => {
          console.log(error);
        })
};
getAllTodos();



















