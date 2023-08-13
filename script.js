const keyboardBtn = document.querySelectorAll("#keyboard-button");
const header = document.getElementById("header");


const words = ["html", "css", "console", "desktop", "computer", "laptop", "phone"];
var wordString = [];


// console.log(keyboardBtn);


var span = [];

var wordIndex = randomNumber(0, 6)
var word = words[wordIndex];
console.log(word);
console.log(word.length);
console.log(wordIndex);

for (let index = 0; index < word.length; index++) {

    span[index] = document.createElement("span");
    span[index].setAttribute("id", `span${index}`);
    span[index].classList.add("header");
    header.appendChild(span[index]);

}
for (let index = 0; index < word.length; index++) {
    wordString[index] = word.charAt(index);
}
console.log(wordString);
console.log(wordString[0]);
function fillSpan(index) {
    for (let index2 = 0; index2 < word.length; index2++) {
        console.log(keyboardBtn[index].textContent);

        if (wordString[index2] == keyboardBtn[index].textContent.toLowerCase()) {
            span[index2].textContent = keyboardBtn[index].textContent;
            keyboardBtn[index].disabled = true;
            keyboardBtn[index].classList.remove("from-white");
            keyboardBtn[index].classList.remove("to-zinc-200");
            keyboardBtn[index].classList.add("color-accept");
        } else {
            keyboardBtn[index].disabled = true;
            keyboardBtn[index].classList.remove("from-white");
            keyboardBtn[index].classList.remove("to-zinc-200");
            keyboardBtn[index].classList.remove("bg-gradient-to-b");
            keyboardBtn[index].classList.add("bg-gray-400");

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
        fillSpan(index);
    });
}