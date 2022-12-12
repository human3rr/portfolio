/*
    Welcome weary traveler...
    It's unexpected to receive visiters this time of year
*/

let textPrompts = [
    'Welcome weary traveler...',
    "It's unexpected to receive visiters this time of year.",
    "Ah. But nonetheless it's a welcome visit.",
    "What may I do for you?"
]

let dialogBox = document.querySelector('.dialogBox')
dialogBox.innerHTML = ""
dialogBox.style.backgroundColor = "transparent";   
dialogBox.style.height = "50px";   
dialogBox.style.width = "400px";   
dialogBox.style.color = "#cecee0";   

function changeInnerText(innerText, delay)
{
    console.log({innerText,delay})

    return (new Promise(resolve => {
        setTimeout(() => {
            dialogBox.innerHTML = innerText;
            resolve("resolved")
        }, delay)
    }))
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeOutText(dialog){
    await timeout(1000)
    dialogBox.innerHTML = ""
    let tempDialog = ""
    let i = 100
    for(let c of dialog){
        tempDialog = tempDialog + c
        await changeInnerText(tempDialog, i)
    }
    return 1;
}

 async function typeOutMultiDialogs(diagArry){
    for (const diag of diagArry) {
        console.log(diag)
        await typeOutText(diag);
      }
}
typeOutMultiDialogs(textPrompts)
//wrap this call in another function.
//After dialog is finished, create response options

//typeOutText("Welcome weary traveler...")
//typeOutText("It's unexpected to receive visiters this time of year", null)
//setTimeout(() => dialogBox.innerHTML = "world", 1000)
/*dialog = "hello"
for(let c of dialog){
    console.log(c)
}*/
console.log(dialogBox.style)