/**
 * Write your challenge solution here
 */

const inputtask=document.getElementById("taskInput");
const addButton=document.getElementById("addButton");
const tasklist=document.getElementById("taskList");
const totaltask=document.getElementById("totalTasks");
const completedtask=document.getElementById("completedTasks")

function updatetotalcounter(){
    // const actualtask=tasklist.querySelectorAll("li:not(.empty-list)").length;
    const actualtask=tasklist.childElementCount;
    totaltask.innerText="Total tasks: " + actualtask;

    // create placeholder if it was removed
    if(actualtask===0){
        if(!tasklist.querySelector(".empty-list")){
            const placeholder=document.createElement("li");
            placeholder.className="empty-list";
            placeholder.textContent="No task yet. Add one above!";
            tasklist.appendChild(placeholder);
        }
    }

}

function updatecompletedtask(){
    // const completedtasks=tasklist.childElementCount;
    const completedtasks=tasklist.querySelectorAll('li.completed').length;
    completedtask.innerText="Completed:" + completedtasks; 
}



// addButton.addEventListener('click', ()=>{
function addTask(){
    const value=inputtask.value;
    if(value==="") return; // prevent adding empty task

    // remove the placeholder if it exist - inital li
    const placeholder=tasklist.querySelector(".empty-list");
    if(placeholder){
        placeholder.remove();
    }

    const li=document.createElement('li');
    li.className="task-item"; // css mein ye class predefine hai

    // checkbox
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="complete-checkbox";

    checkbox.addEventListener('click', ()=>{
        li.classList.toggle("completed");
        updatecompletedtask();
    })

    // create span to display the task text
    const span=document.createElement("span");
    span.className="task-text";
    span.textContent=value;

    // li.innerText=value;

    const delbutton=document.createElement('button');
    delbutton.className="delete-button";
    delbutton.innerText="Delete";
    delbutton.addEventListener('click', ()=>{
        li.remove();
        updatetotalcounter();
        updatecompletedtask()
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delbutton);

    tasklist.appendChild(li);

    
    inputtask.value="";
    
    // tasklist.classList.remove("empty-list")
    
    updatetotalcounter();
};
// })

addButton.addEventListener('click', addTask);

inputtask.addEventListener('keydown', (event)=>{
    if(event.key==="Enter"){
        addTask();
    }
})

// alert('hey');