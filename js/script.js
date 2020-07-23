var btnAdd = document.querySelector(".btn-add-task");
var btnSave = document.querySelector(".btn-save");
var btnCancel = document.querySelector(".btn-cancel");
var btnMenu = document.querySelector(".btn-menu");
var taskHolder = document.querySelector(".task-holder");
var creatorWrapper = document.querySelector(".creator-wrapper");
var userInput = document.querySelector(".user-input");
var task;
var taskChecker;
var tasks = [];

function verifyIfEmpty() {
  if(userInput.value.length == 0) {
    alert("Você precisa escrever algo para criar a tarefa!");
  } else {
    createElements();
  }
}

function createElements() {
  taskChecker = document.createElement("input");
  task = document.createElement("li");
  taskChecker.classList.add("task-checker");
  task.classList.add("task");
  taskChecker.setAttribute("type", "checkbox");
  task.appendChild(taskChecker);

}

function addText() {
  var taskText = document.createTextNode(userInput.value);
  task.appendChild(taskText);
  taskHolder.appendChild(task);
  tasks.push(task);
  userInput.value = "";
  userInput.focus();
}

function saveOnStorage() {
  localStorage.setItem("allTasks", JSON.stringify(tasks));
}

btnSave.onclick = () => {
  verifyIfEmpty();
  createElements();
  addText();
  saveOnStorage();
}
userInput.onkeypress = (e) => {
  if (userInput.value.length > 0 && e.keyCode === 13) {
    verifyIfEmpty();
    createElements();
    addText();
    saveOnStorage();
  }
}
