let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let loginSignUp = document.getElementById("loginSignUp");
let loginSignIn = document.getElementById("loginSignIn");
let btnSuccess = document.getElementById("btnSuccess");
let aHref = document.getElementById("aHref");
let pWelcome = document.getElementById("pWelcome");
let wrongPassword = document.getElementById("wrongPassword");
let wrongAll = document.getElementById("wrongAll");
let icon = document.getElementById("icon");
let flag = false;
let getArray = JSON.parse(localStorage.getItem("items"));
function login() {
  let itemsArray = {
    Email: Email.value,
    Password: Password.value,
  };
  for (let i = 0; i < getArray.length; i++) {
    if (
      itemsArray.Email === getArray[i].Email &&
      itemsArray.Password === getArray[i].Password
    ) {
      localStorage.setItem("Name", JSON.stringify(getArray[i].Name));
      aHref.setAttribute("href", "welcome.html");
      return;
    } else if (
      itemsArray.Email === getArray[i].Email &&
      itemsArray.Password !== getArray[i].Password
    ) {
      wrongPassword.classList.remove("d-none");
      wrongAll.classList.add("d-none");
    } else {
      wrongAll.classList.remove("d-none");
      wrongPassword.classList.add("d-none");
    }
  }
}
loginSignIn.addEventListener("click", function () {
  login();
});
Password.addEventListener("keydown", function () {
  if (Password.value != "") {
    iconEye();
  } else {
    icon.classList.add("d-none");
  }
});
function iconEye() {
  icon.classList.remove("d-none");
}
icon.addEventListener("click", function () {
  if (flag) {
    icon.classList.replace("fa-eye", "fa-eye-slash");
    Password.type = "password";
    flag = false;
  } else {
    icon.classList.replace("fa-eye-slash", "fa-eye");
    Password.type = "text";
    flag = true;
  }
});
