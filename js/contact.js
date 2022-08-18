var okName = false;
var okEmail = false;
var okPhone = false;

function validateName() {
  let nameUser = document.getElementById("name");
  if (!nameUser.value) {
    document.getElementById("errorName").hidden = false;
    nameUser.style.borderColor = "red";
    nameUser.style.borderStyle = "solid";
    okName = false;
  } else {
    document.getElementById("errorName").hidden = true;
    nameUser.style.borderStyle = "none";
    okName = true;
  }
  checkValues();
}

function validateEmail() {
  let emailUser = document.getElementById("email");
  if (!emailUser.value) {
    document.getElementById("errorEmail").hidden = false;
    document.getElementById("errorFormatEmail").hidden = true;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
    okEmail = false;
  } else {
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = true;
  }
  if (
    (emailUser.value && !emailUser.value.includes("@")) ||
    (emailUser.value && !emailUser.value.includes(".com"))
  ) {
    document.getElementById("errorFormatEmail").hidden = false;
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
  } else {
    document.getElementById("errorFormatEmail").hidden = true;
  }
  checkValues();
}

function validatePhone() {
  let phoneNumber = document.getElementById("phone");
  if (!phoneNumber.value) {
    document.getElementById("errorPhone").hidden = false;
    phoneNumber.style.borderColor = "red";
    phoneNumber.style.borderStyle = "solid";
    okPhone = false;
  } else {
    document.getElementById("errorPhone").hidden = true;
    phoneNumber.style.borderStyle = "none";
    okPhone = true;
  }
  checkValues();
}

function checkValues() {
  if (okName && okEmail && okPhone) {
    document.getElementById("errorSubmit").hidden = true;
  }
}

function sendForm() {
  let incompleteForm = document.getElementById("errorSubmit");
  if (okName && okEmail && okPhone) {
    incompleteForm.hidden = true;
    alert("Thank you! Your form has been sent successfully!!");
  } else {
    incompleteForm.hidden = false;
    incompleteForm.style.borderStyle = "dotted";
    incompleteForm.style.borderColor = "red";
  }
}
