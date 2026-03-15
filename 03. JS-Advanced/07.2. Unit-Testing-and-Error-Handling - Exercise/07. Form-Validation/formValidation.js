function validate() {
  let isCompany = document.getElementById("company");

  isCompany.addEventListener("change", (ev) => {
    if (isCompany.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  });

  document.getElementById("submit").addEventListener("click", (ev) => {
    ev.preventDefault();

    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    let userNameTest = /^[A-Za-z0-9]{3,20}$/;
    let passwordTest = /^[\w]{5,15}$/;
    let emailTest = /^.*@.*\..*$/;

    let valid = [];

    if (userNameTest.exec(userName.value) === null) {
      userName.style.borderColor = "red";
      valid.push(false);
    } else {
      userName.style.borderColor = "";
      valid.push(true);
    }

    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = "red";
      valid.push(false);
    } else {
      email.style.borderColor = "";
      valid.push(true);
    }

    if (
      password.value === confirmPassword.value &&
      passwordTest.exec(password.value) !== null
      //&& passwordTest.exec(confirmPassword.value)
    ) {
      password.style.borderColor = "";
      confirmPassword.style.borderColor = "";
      valid.push(true);
    } else {
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      valid.push(false);
    }

    if (isCompany.checked) {
      let companyNumber = document.getElementById("companyNumber");
      if (companyNumber.value < 1000 || companyNumber.value > 9999) {
        companyNumber.style.borderColor = "red";
        valid.push(false);
      } else {
        companyNumber.style.borderColor = "";
        valid.push(true);
      }
    }

    if (valid.includes(false)) {
      document.getElementById("valid").style.display = "none";
    } else {
      document.getElementById("valid").style.display = "block";
    }
  });
}
