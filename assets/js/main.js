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



document.querySelector(".signup").addEventListener("click" ,()=>{
   let sign =document.querySelector(".sign");
   sign.style.left="0";
})

document.querySelector(".signupmain").addEventListener("click" , ()=>{
let firstname = document.querySelector(".firstname").value;
let lastname = document.querySelector(".lastname").value;
let email = document.querySelector(".email").value;
let number = document.querySelector(".number").value;
let age = document.querySelector(".age").value;
let password = document.querySelector(".password").value;
let passwordconfirm = document.querySelector(".passwordconfirm").value;
let signupmain = document.querySelector(".signupmain");


if(firstname.length=="" && lastname.length=="" && email.length=="" && number.length=="" &&
age.length=="" && password.length==""){
  alert("fill in the boxes");
}else{ if(password==passwordconfirm){ 
    let data ={
        firstname,
        lastname,
        email,
        number,
        age ,
        password,
     }
     console.log(data)
      firstname = document.querySelector(".firstname").value="";
      lastname = document.querySelector(".lastname").value="";
      email = document.querySelector(".email").value="";
      number = document.querySelector(".number").value="";
      age = document.querySelector(".age").value="";
      password = document.querySelector(".password").value="";
      passwordconfirm = document.querySelector(".passwordconfirm").value="";
      let sign =document.querySelector(".sign");
      sign.style.left="-100%";
   }
   else{
     alert("the passwords are not the same")
   }}
  
    })
   document.querySelector(".sign").addEventListener("click",()=>{
    let sign =document.querySelector(".sign");
    sign.style.left="-100%";
   })
//signupa click olduqda


let nav=document.querySelectorAll(".menu-item");
nav.forEach((e)=>{
  e.addEventListener("click",()=>{
    let menu= document.querySelector(".active");
    menu.classList.remove("active");
    menu.classList.add("deactive");
  })
})

//menunun lilerine click olduqda