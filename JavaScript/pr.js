for(let index=0; index< text.length; index++){
    console.log(text.charAt(index))
}

const fruits = ["Apple", "Banana", "Orange",]
//fruits[0] = "Apple"

for(let index=0; index< fruits.length; index++){
    console.log(fruits[index])
}
let abc = [1,5,7];
[1,5,7] =  [1,3,7];
console.log(abc);


//const array = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers= [];
let oddNumbers = [];

for(let num of numbers){
    if(num % 2){
           evenNumbers.push(num)}
    else{
    oddNumbers.push(num)}
}

for(let index in numbers){
    console.log(index)
}

    for(let index in numbers){
        console.log(numbers[index])
    }
//nameofarray.push("new element")    it will add new element at the end of the array
//nameofarray.pop()    it will remove the last element of the array
//nameofarray.shift()    it will remove the first element of the array
//nameofarray.unshift("new element")    it will add new element at the beginning of the array
//array.splice(index, number of elements to be removed, "new element")    it will add new element at the index of the array
//array.splice(index, number of elements to be removed)    it will remove the elements from the index of the array
//array.slice(index, number of elements to be removed)    it will remove the elements from the index of the array and return the removed elements
//array.indexOf("element")    it will return the index of the element
//array.lastIndexOf("element")    it will return the last index of the element
//array.includes("element")    it will return true if the element is present in the array
//array.join("separator")    it will join the elements of the array with the separator
//array.reverse()    it will reverse the elements of the array
//array.sort()    it will sort the elements of the array
//array.concat(array2)    it will join the elements of the array with the elements of the array2
//array.copyWithin(target, start, end)    it will copy the elements of the array from start to end and paste it at the target
//array.fill("element", start, end)    it will fill the elements of the array from start to end with the element

