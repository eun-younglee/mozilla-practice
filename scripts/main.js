// const myHeading = document.querySelector('h1');
// //grab a reference to a heading and store it in myHeading variable
// myHeading.textContent = 'Hello world!';
// function multiply(a, b){
//     let result;
//     result = a * b;
//     return result
// }

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Unholy%20Space.png'){
        myImage.setAttribute('src', 'images/mymusic.png');
    } else {
        myImage.setAttribute('src', 'images/Unholy%20Space.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Your lineup, ' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Your lineup, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}