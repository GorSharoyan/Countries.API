let login = document.querySelector("#login");
let password = document.querySelector("#password");
let submitButton = document.querySelector("#submit-button");
let errorMessage = document.querySelector(".error-message");


submitButton.addEventListener("click", (event) => {
  
  if (isValid(login, password)) {
     window.location.href = "./countries.html";
  } else {
       errorMessage.innerHTML='';
      getError();
  }
});

function getError() {
  login.value = "";
  password.value = "";

  let errorText = document.createElement("h3");
  errorText.innerText = "Invaild Login or password !!!";
  errorMessage.append(errorText);

}

function isValid(login, password) {
  return login.value.length > 5 && password.value.length > 5;
}
