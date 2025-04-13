const item =document.querySelectorAll(".accordion-item")
const clickB = document.querySelectorAll(".accordion-button");
const arrows = document.querySelectorAll(".arrow")
const contents = document.querySelectorAll(".accordion-content")

clickB.forEach((button , index)=>{
    button.addEventListener("click", ()=>{
        if(!item[index].classList.contains("active")){
            // arrows[index].classList.add("active")
            // contents[index].classList.add("active")
            item[index].classList.add("active")
        }else{
            // arrows[index].classList.remove("active")
            item[index].classList.remove("active")
        }
    })
})

