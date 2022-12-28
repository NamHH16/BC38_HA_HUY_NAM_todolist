let btnAddTaskEl = document.querySelector("button");
let taskNameEl = document.querySelector("#newTask");

let tasksArr = [];

let tasks = getTaskFromLocalStorage();

let incompleteTask = document.querySelector("#todo");
let completedTask = document.querySelector("#completed");

renderTasks(tasks);

btnAddTaskEl.addEventListener("click", function () {
  if (!taskNameEl.value) {
    alert("Please text an acctivity");
    return false;
  }

  let tasks = getTaskFromLocalStorage();

  tasks.push({ name: taskNameEl.value });

  taskNameEl.value = "";

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks(tasks);
});

function deleteTask(id) {
  let tasks = getTaskFromLocalStorage();
  tasks.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(getTaskFromLocalStorage());
}

function doneTasks(id, tasks = []) {}

function renderTasks(tasks = []) {
  let content = '<ul class="todo" id="todo">';

  tasks.forEach((task, index) => {
    content += `<li>
      <div class="task-name">${task.name}</div>
      <a href="#" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></a>
      <a href="#" onclick="doneTasks(${index})"><i class="fa-regular fa-circle-check"></i></a>
    </li>`;
  });

  content += "</ul>";

  document.querySelector("#result").innerHTML = content;
  // document.querySelector("#todo").innerHTML = content;
}

function getTaskFromLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}
