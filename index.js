/*
    Welcome weary traveler...
    It's unexpected to receive visiters this time of year
*/


//Animate Character speech
let mainCharacterProfile = document.querySelector('.robotProfile')
mainCharacterProfile.src = "robotCroppedFace5.png";
mainCharacterProfile.style.marginBottom = '-5px';
let characterMovement = 0
/*setInterval(() => {
    if (characterMovement === 0){
        mainCharacterProfile.src = "robotCroppedFace5.png"
        characterMovement = 1
    }
    else{
        mainCharacterProfile.src = "robotCroppedFace6.png"
        characterMovement = 0
    }

}, 100)
*/
let textPrompts = [
    'Welcome weary traveler...',
    "It's unexpected to receive visiters this time of year.",
    "Ah. But nonetheless it's a welcome visit.",
    "What may I do for you?",
    `Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general.

    At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable. Needed its design number winter see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
    
    He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.
    `
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
            if (characterMovement === 0){
                mainCharacterProfile.src = "robotCroppedFace6.png"
                characterMovement = 1
            }
            else{
                mainCharacterProfile.src = "robotCroppedFace5.png"
                characterMovement = 0
            }
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
    let i = 50
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
        console.log("finished type out text")
        if (characterMovement === 1){
            mainCharacterProfile.src = "robotCroppedFace5.png"
            characterMovement = 0
            console.log("Reset cropped face")
        }
      }
}
typeOutMultiDialogs(textPrompts)
//wrap this call in another function.
//After dialog is finished, create response options




//mainCharacterProfile.innerHTML = ""
//mainCharacterProfile.style.backgroundColor = "transparent";   
//mainCharacterProfile.style.height = "50px";   
//mainCharacterProfile.style.width = "400px";   
//mainCharacterProfile.style.color = "#cecee0";   

//typeOutText("Welcome weary traveler...")
//typeOutText("It's unexpected to receive visiters this time of year", null)
//setTimeout(() => dialogBox.innerHTML = "world", 1000)
/*dialog = "hello"
for(let c of dialog){
    console.log(c)
}*/
console.log(dialogBox.style)

