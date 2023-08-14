const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const startBtn = document.getElementById("start-button");
// const keyboardBtn = document.querySelectorAll("#keyboard-button");
const header = document.getElementById("header");
const characters = document.getElementById("characters");
const keyboard = document.getElementById("keyboard");
// const gallowsFloor = document.querySelector(".gallows-floor");
// const gallowsWall = document.querySelector(".gallows-wall");
// const gallowsTopFirst = document.querySelector(".gallows-top-first");
// const gallowsTopSecond = document.querySelector(".gallows-top-second");
// const gallowsRope = document.querySelector(".gallows-rope");
// const playerHead = document.querySelector(".player-head");
// const playerBody = document.querySelector(".player-body");
// const playerRightHand = document.querySelector(".player-right-hand");
// const playerLeftHand = document.querySelector(".player-left-hand");
// const playerRightLeg = document.querySelector(".player-right-leg");
// const playerLeftLeg = document.querySelector(".player-left-leg");





const words = ["html", "css", "console", "desktop", "computer", "laptop", "phone"];
var wordString = [];
var chance = 10;
let fill = new Boolean(false);
var correctAnsswer = 0;
const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// console.log(keyboardBtn);


var span = [];
var keyboardBtn = [];


function main() {

    //functions

    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }









    //choose a word
    var wordIndex = randomNumber(0, 6)
    var word = words[wordIndex];

    //make elements
    for (let index = 0; index < word.length; index++) {

        span[index] = document.createElement("span");
        span[index].setAttribute("id", `span${index}`);
        span[index].classList.add("header");
        header.appendChild(span[index]);

    }

    for (let index = 0; index < 26; index++) {
        keyboardBtn[index] = document.createElement("button");
        keyboardBtn[index].setAttribute("id", "keyboard-button");
        keyboardBtn[index].classList.add("key-button");
        keyboardBtn[index].textContent = letter[index];
        keyboard.appendChild(keyboardBtn[index]);

    }
    const gallowsFloor = document.createElement("hr");
    // gallowsFloor.classList.add("hiden-body");
    gallowsFloor.classList.add("gallows-floor");
    gallowsFloor.classList.add("gallows");
    characters.appendChild(gallowsFloor);

    const gallowsWall = document.createElement("hr");
    // gallowsWall.classList.add("hiden-body");
    gallowsWall.classList.add("gallows-wall");
    gallowsWall.classList.add("gallows");
    characters.appendChild(gallowsWall);

    const gallowsTopFirst = document.createElement("hr");

    gallowsTopFirst.classList.add("gallows-top-first");
    gallowsTopFirst.classList.add("gallows");
    // gallowsTopFirst.classList.add("hiden-body");
    characters.appendChild(gallowsTopFirst);

    const gallowsTopSecond = document.createElement("hr");
    gallowsTopSecond.classList.add("gallows-top-second");
    gallowsTopSecond.classList.add("gallows");
    // gallowsTopSecond.classList.add("hiden-body");
    characters.appendChild(gallowsTopSecond);



    const gallowsRope = document.createElement("hr");
    gallowsRope.classList.add("gallows-rope");
    gallowsRope.classList.add("gallows");
    // gallowsRope.classList.add("hiden-body");
    characters.appendChild(gallowsRope);



    const playerHead = document.createElement("hr");
    playerHead.classList.add("player-head");
    playerHead.classList.add("gallows");
    // playerHead.classList.add("hiden-body");
    characters.appendChild(playerHead);


    const playerBody = document.createElement("hr");
    playerBody.classList.add("player-body");
    playerBody.classList.add("gallows");
    // playerBody.classList.add("hiden-body");
    characters.appendChild(playerBody);


    const playerRightHand = document.createElement("hr");
    playerRightHand.classList.add("player-right-hand");
    playerRightHand.classList.add("gallows");
    // playerRightHand.classList.add("hiden-body");
    characters.appendChild(playerRightHand);


    const playerLeftHand = document.createElement("hr");
    playerLeftHand.classList.add("player-left-hand");
    playerLeftHand.classList.add("gallows");
    // playerLeftHand.classList.add("hiden-body");
    characters.appendChild(playerLeftHand);

    
    const playerRightLeg = document.createElement("hr");
    playerRightLeg.classList.add("player-right-leg");
    playerRightLeg.classList.add("gallows");
    // playerRightLeg.classList.add("hiden-body");
    characters.appendChild(playerRightLeg);


    const playerLeftLeg = document.createElement("hr");
    playerLeftLeg.classList.add("player-left-leg");
    playerLeftLeg.classList.add("gallows");
    // playerLeftLeg.classList.add("hiden-body");
    characters.appendChild(playerLeftLeg);







    function winner() {
        window.alert("you win!!!!!!");
        // for (let index = 0; index < 26; index++) {
        //     keyboardBtn[index].disabled = false;
        //     keyboardBtn[index].classList.remove("bg-gray-400");
        //     keyboardBtn[index].classList.remove("color-accept");
        //     keyboardBtn[index].classList.add("bg-gradient-to-b");
        //     keyboardBtn[index].classList.add("from-white");
        //     keyboardBtn[index].classList.add("to-zinc-200");
        // }
        // while (header.firstChild) {
        //     header.removeChild(header.lastChild);
        // }

        // gallowsFloor.classList.add("hiden-body");
        // gallowsWall.classList.add("hiden-body");
        // gallowsTopFirst.classList.add("hiden-body");
        // gallowsTopSecond.classList.add("hiden-body");
        // gallowsRope.classList.add("hiden-body");
        // playerHead.classList.add("hiden-body");
        // playerBody.classList.add("hiden-body");
        // playerRightHand.classList.add("hiden-body");
        // playerLeftHand.classList.add("hiden-body");
        // playerRightLeg.classList.add("hiden-body");
        // playerLeftLeg.classList.add("hiden-body");
        // gallowsFloor.classList.add("hiden-body");

        // chance = 10;
        // correctAnsswer = 0;
        // fill = false;
        location.reload();
        startPage.classList.add("display-page");
        gamePage.classList.remove("display-page");
        main();

    }
    function looser() {
        window.alert("you lose!!!!!!")

    }
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
        wordString[index] = word.charAt(index);
    }
    // console.log(wordString);
    // console.log(wordString[0]);
    function fillSpan(index) {
        for (let index2 = 0; index2 < word.length; index2++) {
            console.log(word);
            // console.log(keyboardBtn[index].textContent);

            if (wordString[index2] == keyboardBtn[index].textContent.toLowerCase()) {
                span[index2].textContent = keyboardBtn[index].textContent;
                keyboardBtn[index].disabled = true;
                keyboardBtn[index].classList.remove("from-white");
                keyboardBtn[index].classList.remove("to-zinc-200");
                keyboardBtn[index].classList.add("color-accept");
                fill = true;
                correctAnsswer++;
                if (wordString.length == correctAnsswer) {
                    winner();
                }
            } else {
                if (index2 == word.length - 1 && !fill) {
                    keyboardBtn[index].disabled = true;
                    keyboardBtn[index].classList.remove("from-white");
                    keyboardBtn[index].classList.remove("to-zinc-200");
                    keyboardBtn[index].classList.remove("bg-gradient-to-b");
                    keyboardBtn[index].classList.add("bg-gray-400");
                    chance = chance - 1;
                    // console.log(`your chance is: ${chance}`);
                    ponishment();
                    setTimeout(function () {
                        if (Number(chance) == 0) {
                            looser();
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



    for (let index = 0; index < 26; index++) {

        keyboardBtn[index].addEventListener('click', () => {
            fill = false;
            fillSpan(index);
        });
    }


}
startBtn.addEventListener('click', () => {
    startPage.classList.add("display-page");
    gamePage.classList.remove("display-page");
    main();

})
