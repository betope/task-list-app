var btnAdd = document.querySelector(".btn-add-task");
var btnSave = document.querySelector(".btn-save");
var btnCancel = document.querySelector(".btn-cancel");
var btnMenu = document.querySelector(".btn-menu");

var taskHolder = document.querySelector(".task-holder");
var creatorWrapper = document.querySelector(".creator-wrapper");
var userInput = document.querySelector(".user-input");

var tasks = [];

function verifier() {
  if(userInput.value.length == 0) {
    alert("Você precisa escrever algo para criar a tarefa!");
  } else {
    alert("Tarefa criada");
  }
}
function createElements() {
  for(task of tasks) {
    var taskChecker = document.createElement("input");
    var task = document.createElement("li");
    var taskText = document.createTextNode(task);

    taskChecker.setAttribute("type", "checkbox");
    task.appendChild(taskChecker);
    task.appendChild(taskText);
  }
}

btnSave.onclick = () => {
  verifier();
}
