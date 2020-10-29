var btnOpenWindow = document.querySelector(".btn-open-window");
var btnSave = document.querySelector(".btn-save");
var btnCancel = document.querySelector(".btn-cancel");
var taskHolder = document.querySelector(".task-holder");
var creatorWrapper = document.querySelector(".creator-wrapper");
var userInput = document.querySelector(".user-input");
var task;
var taskChecker;
var checkmark;
var tasks = [];

function verifyIfEmpty() {
  if(userInput.value.length == 0) {
    alert("Escreva algo para criar uma tarefa!");
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
  localStorage.setItem('allTasks', JSON.stringify(tasks));
}
function retrieveTasks() {
    var str = JSON.parse(localStorage.getItem('allTasks'));
    tasks = str;
    if(!tasks) {
      tasks = [];
    }
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

/* Menu buttons functions*/
var btnShowMenu = document.querySelector(".btn-show-menu");
var btnHideMenu = document.querySelector(".btn-hide-menu");
var infoMenu = document.querySelector(".menu");

btnShowMenu.onclick = () => {
  infoMenu.style.display = "block";
}
