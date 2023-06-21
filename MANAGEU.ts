
class Task {
    public id: number;
    public completed: boolean;

    constructor(public description: string) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
    // get(prop: string | number): string | number {
    //     return this[prop];
    // }
    // set(prop, value) {
    //     this[prop] = value;
    // }
};
// let t1 = new Task("hw");
// console.log(t1);

class TaskManager {
    public tasks: Task[];
    constructor() {
        this.tasks = [];
    }
    addTask(description: string): void {
        this.tasks.push(new Task(description))

    }
    deleteTask(id: number): void {
        let indexDelete = this.tasks.findIndex((activ: Task) => activ.id == id);
        this.tasks.splice(indexDelete, 1);
    }
    updateTaskDescription(id: number, newDescription: string): void {
        let indexUpdate = this.tasks.findIndex((task) => task.id == id);
        this.tasks[indexUpdate].description = newDescription;
    }
    completeTask(id: number): void {
        let indexUpdate = this.tasks.findIndex((task) => task.id == id);
        this.tasks[indexUpdate].completed = true;
    }
}

let manager = new TaskManager()
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
    document.getElementById("active")!.innerHTML = "";
    document.getElementById("completed")!.innerHTML = "";
    // JSON.parse(localStorage.getItem("tasks")).description;
    for (let task of manager.tasks) {
        if (task.completed == false) {
            document.getElementById("active")!.innerHTML += `
     <div class="text-center">
     <li class="list-group-item d-inline-block w-50">${task.description}</li>
     <span> 
     <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i>
     </button> 
     <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> 
     <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i>
     </button>
     </span> 
     </div> `;
        }
        else {
            document.getElementById("completed")!.innerHTML += `
       <div class=text-center>
       <li class="list-group-item d-inline-block w-50 text-decoration-line-through">${task.description}</li> 
       <span> 
       <button class="btn btn-success" disabled><i class="fa-solid fa-check-double"></i>
       </button>
       <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"></i>
       </button> 
       <button class="btn btn-danger" disabled><i class="fa-solid fa-trash"></i>
       </button>
       </span>
       </div> `;
        }
    }
}

showTasksInLists();

function completeTask(id: number) {
    manager.completeTask(id);
    showTasksInLists();
}

function deleteTask(id: number) {
    if (confirm("Are You Sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
    }
}

function updateDescription(id: number) {
    let newDes = prompt("enter new description:");
    if (newDes == null) {
        return;
    }
    else if (newDes != "" && newDes != (+newDes).toString()) {
        manager.updateTaskDescription(id, newDes!);
        showTasksInLists();
    }
    else {
        alert("Sorry something went wrong!");
    }
}

function addNewTask() {
    let description = (document.getElementById("description") as HTMLInputElement).value;
    if (description != null && description != "" && description != (+description).toString()) {
        manager.addTask(description);
        (document.getElementById("description") as HTMLInputElement).value = "";
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