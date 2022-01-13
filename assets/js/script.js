var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = event => {

    event.preventDefault();

    // Capture input
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    }

    createTaskEl(taskDataObj);

    formEl.reset();
};

var createTaskEl = taskDataObj => {
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = 
        "<h3 class='task-name'>" + taskDataObj.name + "</h3>" + 
        "<span class='task-type'>" + taskDataObj.type + "</span>";

    // Append div to li and append li to ul
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
