const toggleBtn = document.querySelector(".toggle-btn")
const panel = document.querySelector(".panel")
const menuItem = document.querySelectorAll(".menu-item")
const closeBtn = document.querySelector(".close-btn")
const content = document.querySelector(".content")


toggleBtn.addEventListener("click", (event)=>{
    // !panel.classList.contains ? panel.classList.add("active") : null
    // if(!panel.classList.contains("active")){
    //     panel.classList.add("active")
    // }else{
    //     panel.classList.remove("active")
    // }
    //or

    panel.classList.toggle("active")

    event.stopPropagation()  // when function (event){}
})

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        panel.classList.remove("active")
        alert(`${item.innerText} is clicked`)
        
    })
})


closeBtn.addEventListener("click", () => {
    panel.classList.remove("active")
})

document.addEventListener("click", () => {
    panel.classList.remove("active")
})


// why we r using stopPropagation ?
// since i have used addeventlistener on button and document 
// document always triggered even when we clicked on the button so both happens at the same time , 
// looks like nothing happened but actually sidebar comes out and instantly removed
// so to stop it i have used stopPropagation 