const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkForm();
})

username.addEventListener("blur", () =>{
    checkInputUsername();
})

email.addEventListener("blur", () =>{
    checkInputEmail();
})

password.addEventListener("blur", () =>{
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () =>{
    checkInputPasswordConfirmation();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O e-mail é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha deve ter no mínimo oito caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "O confirmação de senha é obrigatória.")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas devem ser iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every((item) =>{
        return item.className === "form-content"
    });

    if(isValid){

    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}