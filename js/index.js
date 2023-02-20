"use strict";
const createNewTaskFormElement = document.querySelector('.block__form');
const createNewTaskInputElement = createNewTaskFormElement.querySelector('.block__input-text');

const tasksListElement = document.querySelector('.main__tasks');

createNewTaskFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDecription = createNewTaskInputElement.value;
  const taskElement = createTaskElement(taskDecription);
  tasksListElement.prepend(taskElement);
});



const taskTemplateContent = document.querySelector('#task-template').content;

function createTaskElement(taskDescription) {
  const taskBlockElement = taskTemplateContent.cloneNode(true);

  const taskCheckBoxElement = taskBlockElement.querySelector('.block__input-checkbox');
  const taskDescriptionElement = taskBlockElement.querySelector('.task__description');
  const taskDeleteButtonElement = taskBlockElement.querySelector('.task__button');
  taskDescriptionElement.textContent = taskDescription;
  taskDeleteButtonElement.addEventListener('click', (event) => {
    const taskElement = event.target.closest('.tasks__task');
    taskElement.remove();
  });


  return taskBlockElement;
}














