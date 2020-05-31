const email = document.querySelector("#email");
const button = document.querySelector(".button");
const msg = document.querySelector(".msg");
const error_img = document.querySelector(".error-img");

function validateEmail() {
  if (!email.checkValidity() || email.value === "") {
    console.log("E-mail inválido");
    email.classList.add("invalid");
    msg.classList.add("msg-invalid");
    error_img.classList.add("active");
    msg.innerHTML = "Please provide a valid email";
  } else {
    email.classList.remove("invalid");
    msg.classList.remove("msg-invalid");
    msg.innerHTML = "Email sent!";
    error_img.classList.remove("active");
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});
