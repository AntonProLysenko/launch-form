let parentForm = document.querySelector(".launch_form")
let formResponse = parentForm.firstChild;
let responseTag = formResponse.firstChild

let form = document.querySelector(".main_form");
let submissionResponse = document.querySelector("h1")

console.log("Im working");
let myAlert = ()=>{
    parentForm.className = "hidden";
    submissionResponse.classList.remove("hidden");

    console.log(submissionResponse);
    
}
form.addEventListener("submit", myAlert)
console.log(submissionResponse);

if (responseTag){
    console.log("text",responseTag)}
