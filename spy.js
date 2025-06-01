alert("Hello")

let text= document.querySelector("h1");

const body =document.querySelector("body")

text.addEventListener("mouseover",function(){

    text.style.color= 'red';
});

text.addEventListener("mouseout",function(){
    text.style.color="blue";
});

