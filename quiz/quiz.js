const queBox= document.getElementById("que-box");
const options= document.querySelectorAll(".option");
const btn= document.querySelector(".next");
let container= document.querySelector(".container");
const questions= [
    {
        "que":"what is the largest mammal in world?",
        "a":"Crocodile",
        "b":"Whale",
        "c":"Cat",
        "d":"Shark",
        "right":"Whale"
    },
    {
        "que":"Where is Mumbai?",
        "a":"Japan",
        "b":"China",
        "c":"India",
        "d":"Myanmaar",
        "right":"India"
    },
    {
        "que":"Who is known as SUPERPOWER",
        "a":"Russia",
        "b":"China",
        "c":"France",
        "d":"USA",
        "right":"India"
    }
];

const total= questions.length;
let index= 0;
let score= 0;
let changeQuestion =()=>{
    if(index< total){
        reset();
        queBox.innerText= `${index+1})  ${questions[index].que}`;

        options[0].innerText= questions[index].a;
        options[1].innerText= questions[index].b;
        options[2].innerText= questions[index].c;
        options[3].innerText= questions[index].d;
        index++;
    }else{
        btn.addEventListener("click", resultDisplay());
    }
}
changeQuestion();

function reset(){
    options.forEach(
        function (button){
            button.style.backgroundColor= "#4C847B";
            button.style.color= "white";
            // clearInterval(timeOutId);
        }
    )
}

function resultDisplay(){
    container.style.backgroundColor= "white";
    container.innerHTML= `<h2 id="scoreID">Your Score is ${score}/${total}🥳</h2>`;
    var res= document.getElementById("scoreID");
    res.style.fontSize="2rem";
    res.style.textAlign= "center"
    res.style.margin= "7rem 0";
}

let ansarr=["Whale", "India", "USA"];
let opt1= document.querySelector(".opt1");
opt1.addEventListener("click", function(){
    let foundAnswer= false;
    for(let i=0; i<ansarr.length; i++){
        if(ansarr[i] == opt1.innerText){
            score++;
            document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
            opt1.style.backgroundColor= "green";
            setTimeout(() => {
                changeQuestion();
            }, 500);
            foundAnswer= true;
            break;
        }
    }  
    if (!foundAnswer) {
        opt1.style.color = "red";
        document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
        setTimeout(() => {
            changeQuestion();
        }, 500);
    }
});
let opt2= document.querySelector(".opt2");
opt2.addEventListener("click", function(){
    let foundAnswer= false;
    for(let i=0; i<ansarr.length; i++){
        if(ansarr[i] == opt2.innerText){
            score++;
            document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
            opt2.style.backgroundColor= "green";
            setTimeout(() => {
                changeQuestion();
            }, 500);
            foundAnswer= true;
            break;
        }
    }  
    if (!foundAnswer) {
        opt2.style.color = "red";
        document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
        setTimeout(() => {
            changeQuestion();
        }, 500);
      }
});
let opt3= document.querySelector(".opt3");
opt3.addEventListener("click", function(){
    let foundAnswer= false;
    for(let i=0; i<ansarr.length; i++){
        if(ansarr[i] == opt3.innerText){
            score++;
            document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
            opt3.style.backgroundColor= "green";
            setTimeout(() => {
                changeQuestion();
            }, 500);
            foundAnswer= true;
            break;
        }
    }  
    if (!foundAnswer) {
        opt3.style.color = "red";
        document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
        setTimeout(() => {
            changeQuestion();
        }, 500);
      }
});
let opt4= document.querySelector(".opt4");
opt4.addEventListener("click", function(){
    let foundAnswer= false;
    for(let i=0; i<ansarr.length; i++){
        if(ansarr[i] == opt4.innerText){
            score++;
            opt4.style.backgroundColor= "green";
            document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
            setTimeout(() => {
                changeQuestion();
            }, 500);
            foundAnswer= true;
            break;
        }
    }  
    if (!foundAnswer) {
        opt4.style.color = "red";
        document.querySelector(".scInc").innerHTML= `<h4 class="scInc">Score: ${score}</h4>`;
        setTimeout(() => {
            changeQuestion();
        }, 500);
      }
});

function submitQuiz(){
    changeQuestion();
};

