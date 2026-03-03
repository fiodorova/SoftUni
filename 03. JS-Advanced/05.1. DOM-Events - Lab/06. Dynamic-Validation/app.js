function validate() {
  let inputEmail = document.getElementById("email");
  let email = inputEmail.value;
  let regEx = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

  inputEmail.addEventListener("change", validateEmai);

  function validateEmai(ev) {
    if (regEx.test(ev.target.value)) {
      ev.target.removeAttribute("class");
      return;
    }

    ev.target.className = "error";
  }
}
