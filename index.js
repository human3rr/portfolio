/*
    Welcome weary traveler...
    It's unexpected to receive visiters this time of year
*/

//Logic for rain elements
let hrElement;
let counter = 200;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 2.2 + Math.random() * 0.9 + "s";
    hrElement.style.animationDelay = Math.random() * 10 + "s";
 
  document.body.appendChild(hrElement);
}

//Robot Section fade in
let robotSection = document.querySelector('.robotSection')


setTimeout(() => {
    robotSection.classList.add("RSActive")
}, 1000)

let responseButton1 = document.querySelector('.responseButton')

function CharacterProfile(documentClassName, filename){
    this.characterProfile = document.querySelector(documentClassName)
    this.characterProfile.src = filename
    this.characterProfile.style.marginBottom = '-4px';
    this.characterProfile.style.marginLeft = '3px';
}

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
 /*   `Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction. As into ye then form. To easy five less if rose were. Now set offended own out required entirely. Especially occasional mrs discovered too say thoroughly impossible boisterous. My head when real no he high rich at with. After so power of young as. Bore year does has get long fat cold saw neat. Put boy carried chiefly shy general.
    At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable. Needed its design number winter see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
    He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.
    `*/

let introductionPrompt = [
    'blah blah blah',
]
let textPrompts = [
    'yo',
]
let whoAreYouPrompt = [
    'My name...',
]
let showMeWhatYouGotPrompt = [
    'show you what I can do.',
]

/*
let textPrompts = [
    'Welcome weary traveler...',
    "It's unexpected to receive visiters this time of year.",
    "Ah. But nonetheless it's a welcome visit.",
    "What may I do for you?",
]

let introductionPrompt = [
    'While wondering the cyberspace you come upon a strange place',
    'You sense that there is someone nearing you',
    'Who or what could it be',
    ''
]
let whoAreYouPrompt = [
    'My name...',
    "In my past life I was known as Noah...",
    "But I've been going by the alias Human3rr as long as I can remember",
    "Any other questions?"
]

let showMeWhatYouGotPrompt = [
    'Ah, so you want me to show you what I can do.',
    "Well, if that's the case, here's a sample of what I can achieve",
]

aboutYourself = [
    "I hail from Austin, Texas",
    "I took an interest in technology from a young age",
    "I ended up studying electrical engineering and followed a career of embedded programming",
    "Now my interests lie with web development",
    "I'm currently seeking a role to hone the craft and create tools for the public to interact with",
]

whatAbilitiesDoYouHave = [
    "The majority of my experience lends itself to enterprise level software development",
    "Specifically, I have a lot of experience writing software for embedded microprocessors which manages servers which they reside on",
    "Experience aside, I possess these skills which I believe can be useful in a web development position:\n
    HTML/CSS/JavaScript\n
    React, node.js, express\n
    MySQL, MongoDB\n
    Docker, OpenSSL\n
    Linux"
]
*/
function Chat(documentClassName){
    this.dialogBox = document.querySelector(documentClassName)
    this.dialogBox.innerText = ""
    this.dialogBox.style.backgroundColor = "transparent";
    this.dialogBox.style.color = "#cecee0";   
    this.changeInnerText = changeInnerText;
    this.timeout = timeout;
    this.typeOutText = typeOutText;
    this.typeOutMultiDialogs = typeOutMultiDialogs;
    this.pressedPromptButton = pressedPromptButton;
    this.userPrompts = userPrompts;
}

/*let dialogBox = document.querySelector('.dialogBox')
dialogBox.innerHTML = ""
dialogBox.style.backgroundColor = "transparent";   
dialogBox.style.color = "#cecee0";   
*/
function changeInnerText(innerText, delay)
{
    console.log({innerText,delay})

    return (new Promise(resolve => {
        setTimeout(() => {
            this.dialogBox.innerHTML = innerText;
            resolve("resolved")
        }, delay)
    }))
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeOutText(dialog){
    //time to wait befor starting the next line of dialog passed in
    await timeout(1000)
    console.log("yo")
    console.log(this)
    this.dialogBox.innerHTML = ""
    let tempDialog = ""
    let i = 50
    for(let c of dialog){
        tempDialog = tempDialog + c
        await this.changeInnerText(tempDialog, i)
    }
    return 1;
}

async function pressedPromptButton(prompt){
    console.log("pressedPromptButton")
    responseButton1.classList.remove("RBActive")
    await this.typeOutMultiDialogs(prompt, 0)
    

}
function eventHandlers(){
    console.log(this)
    let whoAreYou = document.querySelector('.whoAreYou')
    let showMeWhatYouGot = document.querySelector('.showMeWhatYouGot')
    //Remove event listeners on click 
    const whoAreYouClicked = async (e) => {
        const elementClicked = e.target;
        elementClicked.setAttribute('listener', 'true');
        console.log('event has been attached');
        await this.pressedPromptButton(whoAreYouPrompt)
        document.querySelector('.robotName').classList.add("robotNameKnown")

        //whoAreYou.removeEventListener("click", clicked, false);
    }
    if (whoAreYou.getAttribute('listener') !== 'true') {
        whoAreYou.addEventListener("click", whoAreYouClicked, false);
    }

    const showMeWhatYouGotClicked = async (e) => {
        const elementClicked = e.target;
        elementClicked.setAttribute('listener', 'true');
        console.log('event has been attached');
        await this.pressedPromptButton(showMeWhatYouGotPrompt)
        document.querySelector('.carousel').classList.add("show")

    }
    if (showMeWhatYouGot.getAttribute('listener') !== 'true') {
        showMeWhatYouGot.addEventListener("click", showMeWhatYouGotClicked, false);
    }
   

}

function userPrompts(){
    //Sets class that reveals buttons
    responseButton1.classList.add("RBActive")
    //Adds event handler that for questions
    eventHandlers.bind(this)()
    

}
 async function typeOutMultiDialogs(diagArry, delayBeforeTextSequence){
    console.log("typeOutMultiDialogs")
    console.log(this)
    await timeout(delayBeforeTextSequence)
    for (const diag of diagArry) {
        console.log(diag)
        await this.typeOutText(diag);
        console.log("finished type out text")
      }
      //Display user prompts after main character finished speaking
      console.log("check out here")
      console.log(this.dialogBox.className)
      //Populate and setup actions only after dialog box has finished from the robot
      if(this.dialogBox.className == "robotDialogBox"){
          this.userPrompts()
      }
      console.log("finished noah")
}




async function setup(){
    const middleSectionChat = new Chat('.middleChat')
    await middleSectionChat.typeOutMultiDialogs(introductionPrompt, 3000)
    
    const mainCharacter = new CharacterProfile('.robotProfile', 'robotPx.png')
    const visitorCharacter = new CharacterProfile('.visitorProfileImg', 'visitorPx.png')
    let visitorSection = document.querySelector('.visitorSection')
    visitorSection.classList.add("show")

    let mainProfile = document.querySelector('.mainProfile')
    mainProfile.classList.add("show")

    const mainCharacterChat = new Chat('.robotDialogBox')
    mainCharacterChat.typeOutMultiDialogs(textPrompts, 3000)

}

setup()

//const visitorChat = new Chat('.visitorDialogBox')
//visitorChat.typeOutMultiDialogs(textPrompts, 3000)





//typeOutMultiDialogs(textPrompts,3000)

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
//console.log(dialogBox.style)

