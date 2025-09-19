document.addEventListener('DOMContentLoaded', () => {
  function reloadCounter () {
    const countLabel = document.querySelector('.js-notif-count');
    let count = localStorage.getItem('counter');

    if (!count) {
      count = 0;
    }
    else {
      count = parseInt(count, 10);
    }

    count++;

    localStorage.setItem('counter', count);

    countLabel.textContent = count;
  }


  function formValidation () {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const form = document.querySelector('.js-form');

    const emailField = document.querySelector('.js-form-email');
    const formMessage = document.querySelector('.js-form-message');
    const submitBtn = document.querySelector('.js-form-submit');

    submitBtn.addEventListener('click', () => {
      if (emailField.value.match(emailValidation)) {
        formMessage.textContent = "Valid Email";
      }
    });
  }

  reloadCounter();
  formValidation();
});
