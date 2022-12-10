/*
    Welcome weary traveler...
    It's unexpected to receive visiters this time of year
*/

let textPrompts = [
    'Welcome weary traveler...',
    "It's unexpected to receive visiters this time of year"
]

let dialogBox = document.querySelector('.dialogBox')
dialogBox.innerHTML = ""
dialogBox.style.backgroundColor = "#0B0B12";   
dialogBox.style.height = "50px";   
dialogBox.style.width = "200px";   
dialogBox.style.color = "#cecee0";   

function changeInnerText(innerText, delay){
    console.log({innerText,delay})
    setTimeout(() => dialogBox.innerHTML = innerText, delay)
}
function typeOutText(dialog, timeForCharacters){
    let tempDialog = ""
    let i = 100
    for(let c of dialog){
        tempDialog = tempDialog + c
        changeInnerText(tempDialog, i)
        i = i + 100
    }
}

typeOutText("Welcome weary traveler...", null)
typeOutText("It's unexpected to receive visiters this time of year", null)
//setTimeout(() => dialogBox.innerHTML = "world", 1000)
/*dialog = "hello"
for(let c of dialog){
    console.log(c)
}*/
console.log(dialogBox.style)