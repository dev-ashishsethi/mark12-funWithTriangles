const baseLength= document.querySelector("#base");
const heightLength= document.querySelector("#height");
const btnCalc= document.querySelector("#calculate");
const output= document.querySelector("#output");

btnCalc.addEventListener("click", calculate);

function calculate(){
    let area=0.5*baseLength.value*heightLength.value;
    output.innerText="Area of Triangle is "+area;
}
