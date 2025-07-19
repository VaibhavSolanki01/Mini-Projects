  let gameSeq = [];
 let userSeq = [];

let started = false;
let level = 0;

let colors = ["blue", "green", "yellow", "red"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        started = true;
        levelUp();
    }
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let btnColor = colors[randIdx];
    let randBtn = document.querySelector(`.${btnColor}`);
    btnFlash(randBtn);
    gameSeq.push(btnColor);
}

function btnPress() {           
    let btn = this;
    btnFlash(btn);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    checkBtns(userSeq.length-1);
}

function checkBtns(idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER! your score was <b>${level}<b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}






