const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const taskList = document.getElementById("taskList");

// let taskcount = 0;
// let completeTaskCount = 0

function updatetotalcounter(){
    const actualTask = taskList.childElementCount
    totalTasks.innerText = actualTask

    if(actualTask === 0){
        if(!taskList.querySelector(".empty-list")){
            const placeholder = document.createElement("li")
            placeholder.className = "empty-list"
            placeholder.textContent = "No task yet. Add one"
            taskList.appendChild(placeholder)
        }
    }
}

function updateComp(){
    const completedTask = taskList.querySelectorAll("li.completed").length
    completedTasks.innerText = completedTask

}

addBtn.addEventListener("click", () => {
    const val = taskInput.value;
    // val.classList = 'task-text'
    if (val === "") return;

    taskcount = taskcount + 1;
    const li = document.createElement("li");
    li.classList = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'complete-checkbox';

    checkbox.addEventListener('click', () => {
        // if (checkbox.checked) {
            completeTaskCount = completeTaskCount + 1;
            li.classList.toggle('completed');
            updateComp()

        // }
        // else {
        //     completeTaskCount = completeTaskCount - 1;

        // }
        // completedTasks.textContent = `Completed: ${completeTaskCount}`
    })

    const task = document.createElement("span");
    task.className = 'task-text'
    task.textContent = val
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = "delete-button";
    deleteBtn.addEventListener('click', () => {
        li.remove();
        // taskcount = taskcount - 1;
        // totalTasks.textContent = `Total tasks: ${taskcount}`;
        // emptylist();
        // if (checkbox.checked) {
        //     completeTaskCount = completeTaskCount - 1;
        //     completedTasks.textContent = `Completed: ${completeTaskCount}`;
        // }
        updatetotalcounter()
        updateComp()

    })

    
    // totalTasks.textContent = `Total tasks: ${taskcount}`;

    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    emptylist();
    taskInput.value = "";
    updatetotalcounter()
})

// function emptylist() {
//     const existing = document.querySelector(".empty-list");

//     if (taskcount === 0) {
//         if (!existing) {
//             const emptyli = document.createElement('li');
//             emptyli.classList.add("empty-list");
//             emptyli.textContent = "No tasks yet. Add one above!";
//             taskList.appendChild(emptyli);
//         }
//     } else {
//         if (existing) {
//             existing.remove();
//         }
//     }
// }

