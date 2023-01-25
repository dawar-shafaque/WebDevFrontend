
document.addEventListener("DOMContentLoaded", function () {

    function handleClick() {
        alert("You have clicked the button.")
    }

    document.getElementById("clickme").onclick = handleClick;

    //recommended 

    document.getElementById("clickme").addEventListener("click", handleClick());



    function handleMouseOver(event) {
        console.log(event);
    }


    document.getElementById("start").addEventListener("click", function handleClick() {
        //event object
        // contains information about the event
        document.addEventListener("mouseover", handleMouseOver)
    })

    document.getElementById("stop").addEventListener("click", function handleClick() {
        //event object
        // contains information about the event
        document.removeEventListener("mouseover", handleMouseOver)
    });

    document.addEventListener("keypress", function (e) {
        console.log("keypress")
        console.log(e.key);
        if (e.key == 2) {
            e.preventDefault();

        }
    })

    document.addEventListener("keydown", function (e) {
        console.log("keydown")
        console.log(e.key);
        if (e.key == 2) {
            e.preventDefault();

        }
    })

    document.addEventListener("keyup", function (e) {
        console.log("keyup");
        console.log(e.key);
        if (e.key == 2) {
            e.preventDefault();
        }
    })

    document.getElementById("username").addEventListener("focus", function (event) {
        console.log("Focus event happened");
    })

    document.getElementById("username").addEventListener("blur", function (event) {
        console.log("Blur event happened");
    })

    // events are captured

    //event bubbling

    document.querySelector(".parent").addEventListener("click", function () {
        console.log("parent clicked");
    }, true)

    document.querySelector(".child").addEventListener("click", function () {
        console.log("child clicked");
    }, true)

    document.getElementById("subchild").addEventListener("click", function (event) {
        console.log("subchild click");
        // event.stopPropagation();
    }, true)



})



