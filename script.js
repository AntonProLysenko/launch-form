// import { LaunchFormElement } from "https://cdn.jsdelivr.net/npm/launch-elements";

let parentForm = document.querySelector(".launch_form")
let form = document.querySelector(".main_form");

let nameField = form.querySelector('input[name="name"]')
let nameFieldError = form.querySelector('#name_error')

let emailField = form.querySelector('input[name="email"]');
let emailFieldError = form.querySelector("#email_error");

let button = form.querySelector('input[type = "submit"]');

let submissionResponse = document.querySelector("#answer");


// console.log(LaunchFormElement);

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
    // this.style.border = "1px solid rgb(249, 72, 57)";
    if(nameField.value.length>=1){
        nameField.style.border = "1px solid rgb(209, 209, 209)";
        nameFieldError.classList.add("hidden");
    }

    if (emailField.value.length > 5 || emailField.value.includes("@")|| emailField.value.includes(".")){
        emailField.style.border = "1px solid rgb(209, 209, 209)";
        emailFieldError.classList.add("hidden");
    }
    
}


emailField.addEventListener("change", checkInputValidity)
nameField.addEventListener("change", checkInputValidity)


   
button.addEventListener("click", () => {

    if(emailField.value.length < 5 || !emailField.value.includes("@")|| !emailField.value.includes(".")) {
        emailField.validity.valid = false
        emailField.setCustomValidity(" ");
    }else{
        emailField.setCustomValidity("");
    }

    if (nameField.validity.valueMissing) {
      nameField.setCustomValidity(" ");
      nameFieldError.classList.remove("hidden");
      nameField.style.border = "1px solid rgb(249, 72, 57)";
    } else{
        nameField.setCustomValidity("");
        nameField.style.border = " border: 1px solid rgb(49, 122, 226)"
    }

    if(!emailField.validity.valid){
        // emailField.setCustomValidity("");
        emailFieldError.classList.remove("hidden");
        emailField.style.border = "1px solid rgb(249, 72, 57)";
    }


    if (emailField.validity.valid&&nameField.validity.valid){
        nameFieldError.classList.add("hidden");
        emailFieldError.classList.add("hidden");
        form.addEventListener("submit", submitHandler);
    }

    if (emailField.validity.valid) {
        emailFieldError.classList.add("hidden");
    }

    if(nameField.validity.valid){
        nameFieldError.classList.add("hidden");
    }

    emailField.reportValidity();
    nameField.reportValidity()

})







// let responseTag = parentForm.firstChild.firstChild
// if (responseTag){
//     console.log("text",responseTag)}
