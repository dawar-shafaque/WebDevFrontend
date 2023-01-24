function handleClick(){
    alert("You have clicked the button.")
} 

document.getElementById("clickme").onclick = handleClick; 

//recommended 

document.getElementById("clickme").addEventListener("click", handleClick());



function handleMouseOver (event){
    console.log(event);
}


document.getElementById("start").addEventListener("click", function handleClick(){
//event object
// contains information about the event
document.addEventListener("mouseover", handleMouseOver)
})

document.getElementById("stop").addEventListener("click", function handleClick() {
//event object
// contains information about the event
document.removeEventListener("mouseover", handleMouseOver)
}); 

document.addEventListener("keyup", function(e){
    console.log(e);
    
})

