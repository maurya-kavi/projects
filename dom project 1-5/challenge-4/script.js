const inputT = document.getElementById("taskInput")
const tTask = document.getElementById("totalTasks")
const cTask = document.getElementById("completedTasks")
const taskList = document.getElementById("taskList")
const addBtn = document.getElementById("addButton")


function updatetotalcounter(){
    const actualTask = taskList.childElementCount
    tTask.innerText = actualTask

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
    cTask.innerText = completedTask

}

addBtn.addEventListener("click", () => {
    if (inputT.value === "") return

    // if (tTask.innerText === "Total task:0") {
    //     taskList.classList.remove("empty-list")
    // }
    const placeholder=taskList.querySelector(".empty-list");
    if(placeholder){
        placeholder.remove();
    }

    const li = document.createElement("li")
    li.className = "task-item"

    const checkbox = document.createElement("input")
    const deleteB = document.createElement("button")

    checkbox.className = "complete-checkbox"
    checkbox.type="checkbox"

    deleteB.className = "delete-button"

    const taskText = document.createElement("span")
    taskText.className = "task-text"

    taskText.textContent = inputT.value

    deleteB.textContent = "Delete"

    checkbox.addEventListener("click", ()=>{
        li.classList.toggle("completed")   // when this class is already present if will be removed or if not present the same class will be added (works like switch)
        updateComp()
    })

    deleteB.addEventListener('click', ()=>{
        li.remove();
        updatetotalcounter();
        updateComp()
    })

    li.appendChild(checkbox)
    li.appendChild(taskText)
    li.appendChild(deleteB)

    taskList.appendChild(li)

    inputT.value = ""

    updatetotalcounter();

})