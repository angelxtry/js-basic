const todoForm = document.querySelector('.js-todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todo-list');

const TODOS_LOCAL_STORAGE = 'todos';

let todos = [];

function deleteTodo(event) {
  // console.log(event.target.parentNode);
  const button = event.target;
  const li = button.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter((todo) => {
    return todo.id !== parseInt(li.id, 10);
  });
  // console.log(cleanTodos);
  todos = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(todos));
}

function paintTodo(text) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const span = document.createElement('span');
  const id = todos.length + 1;
  deleteButton.innerText = '🐙';
  deleteButton.addEventListener('click', deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.id = id;
  todoList.appendChild(li);
  const todoObj = {
    text,
    id,
  };
  todos.push(todoObj);
  saveTodos(todos);
  // console.log(todos);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodo = todoInput.value;
  paintTodo(currentTodo);
  todoInput.value = '';
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LOCAL_STORAGE);
  if (loadedTodos) {
    const parsedTodos = JSON.parse(loadedTodos);
    // console.log(parsedTodos);
    parsedTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener('submit', handleTodoSubmit);
}

init();
