const para = document.createElement("p"); 
para.textContent = "This is created using dom api";
para.classList.add("one"); //way to set a class
para.classList.add("second-class");

para.classList.remove("second-class");


para.setAttribute("id", "js-para");
console.log(para.getAttribute("id"));

const span = document.createElement("span"); //dom node
span.id= "span-id";
span.className = "blue";//way to set a class
span.innerHTML = "This is span created using <em>dom.create element</em>"
span.style.backgroundColor = "yellow"

para.appendChild(span);

document.body.appendChild(para); 


const hobbies = ["coding", "swimming", "jogging"];
const list = document.createElement("ul");

for(let hobby of hobbies){
    list.innerHTML += "<li class='blue'>" + hobby + "</li>"
}
document.body.appendChild(list);

//get the elements 

console.log(document.getElementById("first-para").textContent);

console.log(document.getElementsByClassName("blue"));

console.log(document.querySelectorAll("p"));
console.log(document.querySelector("#first-para"));



//h1 tag 
const para1 = document.createElement("h1"); 
para1.textContent = "This is created using dom api";

document.body.appendChild(para1); 