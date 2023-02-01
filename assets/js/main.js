document.querySelector(".menubar").addEventListener("click" , ()=>{
    let menu= document.querySelector(".hidden-nav");
    menu.classList.remove("deactive");
    menu.classList.add("active");
})
document.querySelector(".backmenu").addEventListener("click" , ()=>{
    let menu= document.querySelector(".active");
    menu.classList.remove("active");
    menu.classList.add("deactive");
})
//menuya click olduqda

