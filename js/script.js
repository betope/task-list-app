var btnOpenWindow = document.querySelector(".btn-open-window");
var btnSave = document.querySelector(".btn-save");
var btnCancel = document.querySelector(".btn-cancel");
var btnMenu = document.querySelector(".btn-menu");
var taskHolder = document.querySelector(".task-holder");
var creatorWrapper = document.querySelector(".creator-wrapper");
var userInput = document.querySelector(".user-input");
var task;
var taskChecker;
var checkmark;
var tasks = [];

function verifyIfEmpty() {
  if(userInput.value.length == 0) {
    alert("Escreva algo para criar uam tarefa!");
    return false;
  } else {
    createElements();
    addText();
    saveOnStorage();
  }
}

function createElements() {
  taskChecker = document.createElement("input");
  task = document.createElement("label");
  checkmark = document.createElement("span");
  taskChecker.classList.add("task-checker");
  task.classList.add("task");
  checkmark.classList.add("checkmark");
  taskChecker.setAttribute("type", "checkbox");
  task.appendChild(taskChecker);
  task.appendChild(checkmark);
}

function addText() {
  var taskText = document.createTextNode(userInput.value);
  task.appendChild(taskText);
  taskHolder.appendChild(task);
  tasks.push(userInput.value);
  userInput.value = "";
  userInput.focus();
}

function saveOnStorage() {
  var str = JSON.stringify(tasks);
  localStorage.setItem('allTasks', str);
}

userInput.onkeydown = (e) => {
  if (userInput.value.length > 0 && e.keyCode === 13) {
    createElements();
    addText();
    saveOnStorage();
  }
}

btnSave.onclick = () => {
  verifyIfEmpty();
}

btnOpenWindow.onclick = () => {
  creatorWrapper.style.display = "block";
  userInput.focus();
}

btnCancel.onclick = () => {
  creatorWrapper.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == creatorWrapper) {
    creatorWrapper.style.display = "none";
  }
}
