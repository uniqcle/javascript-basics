const parent = document.querySelector(".parent"); 
const child = document.querySelector(".child");

console.log(parent)

parent.addEventListener("click", (event)=>{
    child.classList.toggle("active")
}); 