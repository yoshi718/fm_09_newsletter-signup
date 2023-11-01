const form = document.getElementById("form");
const closeModalButton = document.querySelector("[data-close-button]");
const email = document.getElementById("email");
const myModal = document.getElementById("modal");
const myOverlay = document.getElementById("overlay");

closeModalButton.addEventListener("click", () => {
  myModal.classList.remove("active");
  myOverlay.classList.remove("active");
  email.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isEmail = /\S+@\S+.\S+/;

  if (!isEmail.test(email.value)) {
    const errorMsg = document.querySelector(".signup-container__form__error");

    email.classList.add("input_invalid");
    errorMsg.classList.add("show");

    const old = email.value;
    email.value = ``;
    email.value = old;
    email.focus();
    return;
  }

  const enteredEmail = document.getElementById("enteredEmail");
  enteredEmail.innerText = email.value;

  myModal.classList.add("active");
  myOverlay.classList.add("active");
});
