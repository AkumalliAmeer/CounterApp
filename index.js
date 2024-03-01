let welcomeEL = document.getElementById("welcome-el")
let name1 = "Ameer"
let greeting = "Welcome back"
welcomeEL.innerText = greeting +" "+ name1

let count2 = document.getElementById("count-el")
let count1 =0
function increment(){
    count1 +=1
    count2.innerText = count1
}

let saveEL = document.getElementById("save-el")
function save(){
    let Previous  = count1+"-"
    saveEL.innerText += Previous
    count2.textContent = 0
    count1=0

}
