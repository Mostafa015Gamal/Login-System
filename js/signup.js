let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let loginSignUp = document.getElementById("loginSignUp");
let loginSignIn = document.getElementById("loginSignIn");
let btnSuccess = document.getElementById("btnSuccess");
let pName = document.getElementById("pName");
let pEmail = document.getElementById("pEmail");
let pPassword = document.getElementById("pPassword");
let icon = document.getElementById("icon");
let flag = false;
let nothing = false;
if (localStorage.getItem("items") === null) {
  localStorage.setItem("items", JSON.stringify([]));
}
let setItems = JSON.parse(localStorage.getItem("items"));
loginSignUp.addEventListener("click", function () {
  login();
});
Password.addEventListener("keydown", function () {
  if (Password.value != "") {
    iconEye();
  } else {
    icon.classList.add("d-none");
  }
});
function login() {
  if (validate(inputName) && validate(inputEmail) && validate(inputPassword)) {
    any();
  }
}
function any() {
  let itemsArray = {
    Name: Name.value.toLowerCase(),
    Email: Email.value,
    Password: Password.value,
  };
  if (setItems == nothing) {
    btnSuccess.classList.remove("d-none");
    setItems.push(itemsArray);
    localStorage.setItem("items", JSON.stringify(setItems));
    clearData();
    return;
  }
  for (let i = 0; i < setItems.length; i++) {
    if (
      itemsArray.Email === setItems[i].Email ||
      itemsArray.Name === setItems[i].Name
    ) {
      return alert("The email is already registered");
    }
  }
  btnSuccess.classList.remove("d-none");
  setItems.push(itemsArray);
  localStorage.setItem("items", JSON.stringify(setItems));
  clearData();
}

function clearData() {
  Name.value = "";
  Email.value = "";
  Password.value = "";
}
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

let inputName = document.querySelector("input.Name");
let inputEmail = document.querySelector("input.Email");
let inputPassword = document.querySelector("input.Password");

inputName.addEventListener("input", function (e) {
  if (validate(e.target) === false) {
    pName.classList.remove("d-none");
  } else {
    pName.classList.add("d-none");
  }
});
inputEmail.addEventListener("input", function (e) {
  if (validate(e.target) === false) {
    pEmail.classList.remove("d-none");
  } else {
    pEmail.classList.add("d-none");
  }
});
inputPassword.addEventListener("input", function (e) {
  if (validate(e.target) === false) {
    pPassword.classList.remove("d-none");
    icon.style.bottom = "63%";
  } else {
    pPassword.classList.add("d-none");
    icon.style.bottom = "40%";
  }
});
let validates = {
  Name: /\w{3,}(\s+\w+)*$/,
  Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  Password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
};
function validate(date) {
  if (validates[date.id].test(date.value)) {
    date.classList.add("is-valid");
    return true;
  } else {
    date.classList.add("is-invalid");
    return false;
  }
}
