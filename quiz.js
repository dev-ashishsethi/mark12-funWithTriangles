const quizForm= document.querySelector("#quizForm");
const btn= document.querySelector("#btnSubmit");
const result= document.querySelector("#result");

var correctAnswer=["90","Right Angled"];

function calculateScore(){
    let score=0;
    let index=0;

    const formResults= new FormData(quizForm);
    for(let value of formResults.values()){
       if(value===correctAnswer[index]){
        score+=1;
        
       }
       index+=1;
    }
    result.innerText="Your Score is "+score;
}

btn.addEventListener("click", calculateScore);