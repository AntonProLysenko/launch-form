// import { LaunchFormElement } from "https://cdn.jsdelivr.net/npm/launch-elements";

let parentForm = document.querySelector(".launch_form")
let form = document.querySelector(".main_form");

let nameField = form.querySelector('input[name="name"]')
let nameFieldError = form.querySelector('#name_error')

let emailField = form.querySelector('input[name="email"]');
let emailFieldError = form.querySelector("#email_error");

let button = form.querySelector('input[type = "submit"]');
let submissionResponse = document.querySelector("#answer");



let submitHandler = (evt) => {
  evt.preventDefault();
  parentForm.classList = "hidden";
  submissionResponse.classList.remove("hidden");

  // LaunchFormElement.render=()=>{
  //     return this.complete ? y`<slot name="success">Worked!</slot>` : y`<slot>Error</slot>`;
  // }
  // LaunchFormElement.render()
};


let checkInputValidity=()=>{
 
    if(emailField.value.length < 5 || !emailField.value.includes("@")|| !emailField.value.includes(".")) {
        emailField.validity.valid = false
        emailField.setCustomValidity(" ");
        emailFieldError.classList.remove("hidden");
        emailField.style.border = "1px solid rgb(249, 72, 57)";
    }else{
        emailField.setCustomValidity("");
        emailField.style.border = "1px solid rgb(209, 209, 209)";
        emailFieldError.classList.add("hidden"); 
    }

    if (nameField.validity.valueMissing) {
        nameField.setCustomValidity(" ");
        nameFieldError.classList.remove("hidden");
        nameField.style.border = "1px solid rgb(249, 72, 57)";
    } else{
        nameField.setCustomValidity("");    
        nameField.style.border = "1px solid rgb(209, 209, 209)";
        nameFieldError.classList.add("hidden");
    }


    if (emailField.validity.valid&&nameField.validity.valid){
        nameFieldError.classList.add("hidden");
        emailFieldError.classList.add("hidden");
        return true
    }
    emailField.reportValidity();
    nameField.reportValidity()
}


emailField.addEventListener("change", checkInputValidity)
nameField.addEventListener("change", checkInputValidity)


   
button.addEventListener("click", () => {
    let valid = checkInputValidity()
    valid && form.addEventListener("submit", submitHandler);
})







// let responseTag = parentForm.firstChild.firstChild
// if (responseTag){
//     console.log("text",responseTag)}
