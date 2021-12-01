const angle1= document.querySelector("#angle1");
const angle2= document.querySelector("#angle2");
const angle3= document.querySelector("#angle3");
const btn= document.querySelector("#btnValidate");
const output= document.querySelector("#output");


btn.addEventListener("click", validate);

function validate(){
    let sumOfAngles=Number(angle1.value)+Number(angle2.value)+Number(angle3.value);

    
    if(sumOfAngles===180){
        output.innerText="Triangle can be made."
    }
    else{
        output.innerText="Triangle cannot be made."
    }
}