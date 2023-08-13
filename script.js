const keyboardBtn = document.querySelectorAll("#keyboard-button");
const header = document.getElementById("header")

let fill = new Boolean(false);

function fillSpan(index){
    fill = false;
    for (let index2 = 0; index2 < 10; index2++) {
        console.log("come");
        if(!span[index2].textContent && !fill){
            console.log(index2);
            span[index2].textContent = keyboardBtn[index].textContent;
            fill = true;
        }
        
    }
}

// console.log(keyboardBtn);
for (let index = 0; index < 26; index++) {

    keyboardBtn[index].addEventListener('click', () => {
        fillSpan(index);
    });
}
var span=[];


for (let index = 0; index < 10; index++) {

    span[index] = document.createElement("span");
    span[index].setAttribute("id", `span${index}`);
    span[index].classList.add("header");
    header.appendChild(span[index]);

}
// const span1=document.createElement("span");
// span1.setAttribute("id","span1");
// span1.classList.add("header");
// header.appendChild(span1);


