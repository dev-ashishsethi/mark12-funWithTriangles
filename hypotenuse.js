const firstSide= document.querySelector("#firstSide");
const secondSide= document.querySelector("#secondSide");
const btnCalc= document.querySelector("#calculate");
const output= document.querySelector("#output");

btnCalc.addEventListener("click",calculate);

function calculate(){
    let sumOfSquares=firstSide.value*firstSide.value+secondSide.value*secondSide.value;
    let hypotenuse=Math.sqrt(sumOfSquares);
    output.innerText="Hypotenuse length is "+hypotenuse;
}