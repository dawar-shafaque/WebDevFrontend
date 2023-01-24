let firstNumber = 5;
let secondNumber = 10;
function compareNumber(firstNumber, secondNumber) {
    if (secondNumber > firstNumber) {
        console.log(secondNumber + " is greater than " + firstNumber);
    }
    else if (secondNumber < firstNumber) {
        console.log(secondNumber + "is not greater than " + firstNumber);
    }
    else {
        console.log("Both the numbers are equal");
        console.log("This is another statement");
    }
}


compareNumber(5, 10);
compareNumber(10, 5);
compareNumber(10,10); 

function print() {
    console.log("this is printed in the console");
} 
print();


const add = function addNumber(firstNumber, secondNumber)
{
    return firstNumber + secondNumber;
} 
const result =add(5,7);
console.log(result);
// const result = addNumber(2,3); 
// console.log(result);

//anonymous functions 

const subtract = function(firstNumber,secondNumber)
{
    return firstNumber - secondNumber;
} 
//invoking 
console.log(subtract(3,5)); 

const person = {
    firstName: "John", 
    lastName: "Doe", 
    print: function(){
        console.log("This function is a property of an object")
    }
};

person.print();

//coding conventions in JS 

//camelCase 
