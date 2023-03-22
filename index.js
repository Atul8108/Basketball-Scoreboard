// <h2 class="scores" id="increment-el">0</h2>
// <button id="btn-el" onclick="add1()">+1</button>

let btnEl= document.getElementById("btn-el")
let incrementEl = document.getElementById("increment-el")
let incrementTwoEl = document.getElementById("incrementTwo-el")
console.log(incrementTwoEl)

let count=0
let countG=0

function incrOne(){
    count = count + 1
    incrementEl.innerText= count  
}

function incrTwo(){
    count = count + 2
    incrementEl.innerText= count 
       
}

function incrThree(){
    count = count + 3
    incrementEl.innerText= count      
}

// GUEST LOGIC
function gestOne(){
    countG = countG + 1
    incrementTwoEl.innerText= countG 
}
function gestTwo(){
    countG = countG + 2
    incrementTwoEl.innerText= countG 
}
function gestThree(){
    countG = countG + 3
    incrementTwoEl.innerText= countG 
}