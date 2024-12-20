/*for muntiple image post*/

const img =document.querySelectorAll(".image")
img.forEach(image =>{
    const love = image.querySelector("i")

    image.addEventListener("dblclick",function(){
        love.style.transform ="translate(-50%,-50%) scale(1)";
        love.style.opacity = "0.8";
    
        setTimeout(function (){
            love.style.opacity = "0";
        },1000);
        setTimeout(function (){
            love.style.transform ="translate(-50%,-50%) scale(1)";
        },2000);
    })
})
/* for single like post
const img =document.querySelector(".image")
const love = document.querySelector("i")

img.addEventListener("dblclick",function(){
    love.style.transform ="translate(-50%,-50%) scale(1)";
    love.style.opacity = "0.8";

    setTimeout(function (){
        love.style.opacity = "0";
    },1000);
    setTimeout(function (){
        love.style.transform ="translate(-50%,-50%) scale(1)";
    },2000);
})*/