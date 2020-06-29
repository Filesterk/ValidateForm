//Login form validation
let loginForm = document.querySelector('.login-form');
let loginFields = loginForm.querySelectorAll('.login-field');
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
    removeValidation(loginForm);
    checkFieldsPresence(loginFields);
})
//Register form validation
let registerForm = document.querySelector(".register-form");
let registerFields = registerForm.querySelectorAll(".register-field");
let registerPassword = registerForm.querySelector(".register-password");
let registerEmail = registerForm.querySelector(".register-email");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  removeValidation(registerForm);
  checkFieldsPresence(registerFields);
  checkEmail(registerEmail);
  checkPassword(registerPassword);
});
//Form validation functions
let generateError = function (text) {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};
let removeValidation = function (form) {
  let errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};
let checkFieldsPresence = function (fields) {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError("Can't be blank");
      fields[i].parentElement.insertBefore(error, fields[i]);
      fields[i].style.border = "1px solid red";
    }
  }
};
function insertError(error, field) {
  field.parentElement.insertBefore(error, field);
  field.style.border = "1px solid red";
}
function checkEmail(elem) {
  const EMAIL_REG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    !EMAIL_REG.test(elem.value) &&
    elem.value !== ""
  ) {
    let error = generateError("Not a valid email");
    insertError(error, elem);
  }
}
function checkPassword(elem) 
		{ 
      const PASSW_REG = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (!PASSW_REG.test(elem.value) && elem.value !== "") {
        let error = generateError(
          "Password must be from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        );
        insertError(error, elem);
      }
		}
