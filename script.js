let login = document.querySelector("#login");
let password = document.querySelector("#password");
let submitButton = document.querySelector("#submit-button");
let body = document.querySelector("body");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (isValid(login, password)) {
    login.value = "";
    password.value = "";
    window.location.href = "./countries.html";
  } else {
    getError();
  }
});

function getError() {
  login.value = "";
  password.value = "";

  let errorMessage = document.createElement("div");
  errorMessage.classList = "error-message";
  let errorText = document.createElement("h1");
  errorText.innerText =
    "Invaild Login or password !!! Valid properties in readme file";
  errorMessage.append(errorText);
  body.append(errorMessage);
}

function isValid(login, password) {
  return login.value.length > 5 && password.value.length > 5;
}
