var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
    return Task;
}());
;
// let t1 = new Task("hw");
// console.log(t1);
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description) {
        this.tasks.push(new Task(description));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexDelete = this.tasks.findIndex(function (activ) { return activ.id == id; });
        this.tasks.splice(indexDelete, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
//manager.addTask("Dishes");
//manager.addTask("hw");
//console.log(manager.tasks);
// function showTaskInTable(): void {
//     for (let task of manager.tasks) {
//         document.getElementById("tasks")!.innerHTML += `<tr>
//         <td>${task.id}</td>
//         <td>${task.description}</td>
//         <td>${task.completed}</td>
//         </tr>`
//     }
// }
// showTaskInTable();
function showTasksInLists() {
    document.getElementById("active").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    // JSON.parse(localStorage.getItem("tasks")).description;
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("active").innerHTML += "\n     <div class=\"text-center\">\n     <li class=\"list-group-item d-inline-block w-50\">".concat(task.description, "</li>\n     <span> \n     <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i>\n     </button> \n     <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> \n     <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i>\n     </button>\n     </span> \n     </div> ");
        }
        else {
            document.getElementById("completed").innerHTML += "\n       <div class=text-center>\n       <li class=\"list-group-item d-inline-block w-50 text-decoration-line-through\">".concat(task.description, "</li> \n       <span> \n       <button class=\"btn btn-success\" disabled><i class=\"fa-solid fa-check-double\"></i>\n       </button>\n       <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"></i>\n       </button> \n       <button class=\"btn btn-danger\" disabled><i class=\"fa-solid fa-trash\"></i>\n       </button>\n       </span>\n       </div> ");
        }
    }
}
showTasksInLists();
function completeTask(id) {
    manager.completeTask(id);
    showTasksInLists();
}
function deleteTask(id) {
    if (confirm("Are You Sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
    }
}
function updateDescription(id) {
    var newDes = prompt("enter new description:");
    if (newDes == null) {
        return;
    }
    else if (newDes != "" && newDes != (+newDes).toString()) {
        manager.updateTaskDescription(id, newDes);
        showTasksInLists();
    }
    else {
        alert("Sorry something went wrong!");
    }
}
function addNewTask() {
    var description = document.getElementById("description").value;
    if (description != null && description != "" && description != (+description).toString()) {
        manager.addTask(description);
        document.getElementById("description").value = "";
        showTasksInLists();
    }
    else {
        alert("Sorry is not valid");
    }
}
// localStorage.setItem("tasks", JSON.stringify(description));
//local storage
// let description = (document.getElementById("description") as HTMLInputElement).value;
// localStorage.setItem("theDescription", JSON.stringify(tasks));
