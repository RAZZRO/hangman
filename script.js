const keyboardBtn = document.querySelectorAll("#keyboard-button");
const header = document.getElementById("header");
const gallowsFloor = document.querySelector(".gallows-floor");
const gallowsWall = document.querySelector(".gallows-wall");
const gallowsTopFirst = document.querySelector(".gallows-top-first");
const gallowsTopSecond = document.querySelector(".gallows-top-second");
const gallowsRope = document.querySelector(".gallows-rope");
const playerHead = document.querySelector(".player-head");
const playerBody = document.querySelector(".player-body");
const playerRightHand = document.querySelector(".player-right-hand");
const playerLeftHand = document.querySelector(".player-left-hand");
const playerRightLeg = document.querySelector(".player-right-leg");
const playerLeftLeg = document.querySelector(".player-left-leg");





const words = ["html", "css", "console", "desktop", "computer", "laptop", "phone"];
var wordString = [];
var chance = 10;
let fill = new Boolean(false);


// console.log(keyboardBtn);


var span = [];

var wordIndex = randomNumber(0, 6)
var word = words[wordIndex];
// console.log(word);
// console.log(word.length);
// console.log(wordIndex);

function ponishment() {
    switch (Number(chance)) {
        case 9:
            gallowsFloor.classList.remove("hiden-body");
            break;
        case 8:
            gallowsWall.classList.remove("hiden-body");
            break;
        case 7:
            gallowsTopFirst.classList.remove("hiden-body");
            gallowsTopSecond.classList.remove("hiden-body");
            break;
        case 6:
            gallowsRope.classList.remove("hiden-body");
            break;
        case 5:
            playerHead.classList.remove("hiden-body");
            break;
        case 4:
            playerBody.classList.remove("hiden-body");
            break;
        case 3:
            playerRightHand.classList.remove("hiden-body");
            break;
        case 2:
            playerLeftHand.classList.remove("hiden-body");
            break;
        case 1:
            playerRightLeg.classList.remove("hiden-body");
            break;
        case 0:
            playerLeftLeg.classList.remove("hiden-body");
            break;


        default:
            break;
    }
}

for (let index = 0; index < word.length; index++) {

    span[index] = document.createElement("span");
    span[index].setAttribute("id", `span${index}`);
    span[index].classList.add("header");
    header.appendChild(span[index]);

}
for (let index = 0; index < word.length; index++) {
    wordString[index] = word.charAt(index);
}
// console.log(wordString);
// console.log(wordString[0]);
function fillSpan(index) {
    for (let index2 = 0; index2 < word.length; index2++) {
        // console.log(keyboardBtn[index].textContent);

        if (wordString[index2] == keyboardBtn[index].textContent.toLowerCase()) {
            span[index2].textContent = keyboardBtn[index].textContent;
            keyboardBtn[index].disabled = true;
            keyboardBtn[index].classList.remove("from-white");
            keyboardBtn[index].classList.remove("to-zinc-200");
            keyboardBtn[index].classList.add("color-accept");
            fill = true;
        } else {
            if (index2 == word.length - 1 && !fill) {
                keyboardBtn[index].disabled = true;
                keyboardBtn[index].classList.remove("from-white");
                keyboardBtn[index].classList.remove("to-zinc-200");
                keyboardBtn[index].classList.remove("bg-gradient-to-b");
                keyboardBtn[index].classList.add("bg-gray-400");
                chance = chance - 1;
                console.log(`your chance is: ${chance}`);
                ponishment();
                setTimeout(function() {
                    if(Number(chance)==0){
                        window.alert("you loose!!!!!!")
                    }                 
                 }, 2000);
            }


        }


    }
    // fill = false;
    // for (let index2 = 0; index2 < 10; index2++) {
    //     console.log("come");
    //     if (!span[index2].textContent && !fill) {
    //         console.log(index2);
    //         span[index2].textContent = keyboardBtn[index].textContent;
    //         fill = true;
    //     }

    // }
}
// const span1=document.createElement("span");
// span1.setAttribute("id","span1");
// span1.classList.add("header");
// header.appendChild(span1);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let index = 0; index < 26; index++) {

    keyboardBtn[index].addEventListener('click', () => {
        fill = false;
        fillSpan(index);
    });
}
