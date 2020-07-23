var btnAdd = document.querySelector(".btn-add-task");
var btnSave = document.querySelector(".btn-save");
var btnCancel = document.querySelector(".btn-cancel");
var btnMenu = document.querySelector(".btn-menu");

var taskHolder = document.querySelector(".task-holder");
var creatorWrapper = document.querySelector(".creator-wrapper");
var userInput = document.querySelector(".user-input");

var tasks = [];

function verifyIfEmpty() {
  if(userInput.value.length == 0) {
    alert("Você precisa escrever algo para criar a tarefa!");
  } else {
    createElements();
  }
}

function createElements() {
  var taskChecker = document.createElement("input");
  var task = document.createElement("li");
  var taskText = document.createTextNode(userInput.value);

  taskChecker.classList.add("task-checker");
  task.classList.add("task");

  taskChecker.setAttribute("type", "checkbox");
  task.appendChild(taskChecker);
  task.appendChild(taskText);
  userInput.value = "";
  userInput.focus();
  taskHolder.appendChild(task);
  tasks.push(taskText);
}

function cancel() {
  btnCancel.onclick = userInput.value = "";
}

btnSave.onclick = () => {
  verifyIfEmpty();
}
userInput.onkeypress = () => {
  if (userInput.value > 0 && e.keyCode === 13) {
    createElements();
  }

}
