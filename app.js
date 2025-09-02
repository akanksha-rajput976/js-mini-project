let gameSeq=[];
let userseq=[];

let started=false;
let level=0;

let btns = ["red", "green", "purple", "yellow"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}
function levelup(){
    userseq = []; 
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColors=btns[randIdx];
    let randbtn=document.querySelector(`.${randColors}`);
    gameSeq.push(randColors);
    console.log(gameSeq);
    // console.log(randColors);
    // console.log(randbtn);
    btnFlash(randbtn);
}
function checkAns(idx) {
    if (userseq[idx] === gameSeq[idx]) {
        console.log("correct so far");

        if (userseq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerText = "Game Over! Press any key to Restart";
        document.body.style.backgroundColor = "red";
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 200);

        resetGame();
    }
}
function btnPress(){
    console.log(this);
     let btn=this;
     userFlash(btn);

     userColor=btn.getAttribute("id");
     userseq.push(userColor);
     checkAns(userseq.length - 1);
}
let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
     btn.addEventListener("click",btnPress);
}
function resetGame() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}