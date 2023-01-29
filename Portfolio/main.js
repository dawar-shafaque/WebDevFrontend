const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent) 

const phrase = ["Frontend Developer...", "Student...", "Tech Enthusiast..."];
let phraseIndex =0;
let letterIndex =0; 
const typingSpeed = 150; 
const erasingSpeed = 75;

function printLetters(phrase){

    if(letterIndex == phrase.length){
        clearLetters();
    }
    else if(letterIndex < phrase.length)
    {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        // setTimeout(//function ref, delay in ms) 
        setTimeout(function(){
            printLetters(phrase)
        }, typingSpeed)
    }
}


function clearLetters(){ 

    if(letterIndex == -1)
    {
        phraseIndex = (phraseIndex+1) %phrase.length;
        letterIndex =0; 
        printLetters(phrase[phraseIndex]);
    }
    else if(letterIndex > -1)
    {
        let updatedPhrase = ""; 
        for(let index =0; index < letterIndex; index ++)
        {
            updatedPhrase += phrase[phraseIndex].charAt(index);

        } 
        dynamicContent.textContent = updatedPhrase;
        letterIndex -= 1;
        setTimeout(clearLetters,erasingSpeed);
        
    }
}

printLetters(phrase[0])