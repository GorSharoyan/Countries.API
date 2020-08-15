let login = document.querySelector("#login");
let password = document.querySelector("#password");
let submitButton = document.querySelector("#submit-button");
let body = document.querySelector("body");

localStorage.setItem("login", "Gor");
localStorage.setItem("password", 123);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (passValidation(login, password)) {
    console.log("passed!!!");
  } else {
    getError()
  }
});

function getError() {
    login.value = "";
    password.value = "";
 
    let errorMessage=document.createElement('div');
    errorMessage.classList='error-message';
    let errorText=document.createElement('h1');
    errorText.innerText='Invaild Login or password !!! Valid properties in readme file';
    errorMessage.append(errorText);
    body.append(errorMessage);
}

function passValidation(login, password) {
  
  if (
    login.value === localStorage.getItem("login") &&
    password.value === localStorage.getItem("password")
  ) {
    login.value = "";
    password.value = "";
    return true;
  }
}
