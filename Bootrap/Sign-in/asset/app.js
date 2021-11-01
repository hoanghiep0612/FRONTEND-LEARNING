const elementEmail = document.querySelector("form-floating .form-control[name=email]");
const elementPassword = document.querySelector("form-floating .form-control[name=password]");
const elementAlertValidate = document.querySelector(".form-loggin .alert-validate");

function validateInput() {
  
    var msg = "";
  
    if (!elementEmail.value) {
      msg = "Email required !";
    } else if (!validateEmail(elementEmail.value)) {
      msg = "Email invalid !";
    } else if (!elementPassword.value) {
      msg = "Password required !";
    } else if (elementPassword.value.length < 6) {
      msg = "Password large 6 character !";
    }
  
    showValidate(msg);
  }

  function showValidate(tham_so) {
    if (tham_so.length > 0) {
      elementAlertValidate.innerHTML = tham_so;
      elementAlertValidate.style.display = "block";
    }
  }
  
  function hideValidate() {
    elementAlertValidate.style.display = "none";
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }