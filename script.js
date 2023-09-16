// import { LaunchFormElement } from "https://cdn.jsdelivr.net/npm/launch-elements";

let parentForm = document.querySelector(".launch_form")
let form = document.querySelector(".main_form");

let nameField = form.querySelector('input[name="name"]')
// 
let nameFieldError = form.querySelector('#name_error')

let emailField = form.querySelector('input[name="email"]');
// emailField.setCustomValidity(" ");
let emailFieldError = form.querySelector("#email_error");


let button = form.querySelector('input[type = "submit"]');




let submissionResponse = document.querySelector("h1")


// console.log(LaunchFormElement);

let submitHandler = (evt) => {
  evt.preventDefault();
  parentForm.classList = "hidden";
  submissionResponse.classList.remove("hidden");
  alert("Submitted")


  // LaunchFormElement.render=()=>{
  //     return this.complete ? y`<slot name="success">Worked!</slot>` : y`<slot>Error</slot>`;
  // }
  // LaunchFormElement.render()
};




button.addEventListener("click", () => {
    console.dir(nameField);

    if(emailField.value.length < 1 || !emailField.value.includes("@")|| !emailField.value.includes(".")) {
        emailField.validity.valid = false
        emailField.setCustomValidity(" ");
    }else{
        emailField.setCustomValidity("");
    }

    if (nameField.validity.valueMissing) {
      nameField.setCustomValidity(" ");
      nameFieldError.classList.remove("hidden");
    } else{
        nameField.setCustomValidity("");
    }

    if(!emailField.validity.valid){
        // emailField.setCustomValidity("");
        emailFieldError.classList.remove("hidden");
    }

    console.log(emailField.validity.valid);
       console.log(nameField.validity.valid)
    

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

    // emailField.reportValidity()
    // nameField.reportValidity()
})




console.log(submissionResponse);

let responseTag = parentForm.firstChild.firstChild
// if (responseTag){
//     console.log("text",responseTag)}
