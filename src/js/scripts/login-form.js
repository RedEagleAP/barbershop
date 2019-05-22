/**
 * Форма входа
 */
let loginBtn = document.querySelector('.user-list__login');
let modal = document.querySelector('.modal-login');
let modalCloseBtnMobile = modal.querySelector('#form-close-btn');
let modalCloseBtnDesktop = modal.querySelector('.modal-login__close-button');

let loginForm = document.querySelector('.modal-login__form');
let loginNameField = loginForm.querySelector('#login-field');
let loginPasswordField = loginForm.querySelector('#password-field');

let isStorageSupport = true;
let loginNameSaved = '';

try {
  loginNameSaved = localStorage.getItem('login-field');
} catch (err) {
  isStorageSupport = false;
}

const loginFormModal = {
  LoginBtn() {
    loginBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (modal.classList.contains('modal-login--closed')) {
        modal.classList.remove('modal-login--closed');
        modal.classList.add('modal-login--show');
      } else {
        modal.classList.add('modal-login--show');
      }

      if (loginNameSaved) {
        loginNameField.value = loginNameSaved;
        loginPasswordField.focus();
      } else {
        loginNameField.focus();
      }
    });
  },

  ModalClose() {
    modalCloseBtnMobile.addEventListener('click', (evt) => {
      evt.preventDefault();

      modal.classList.remove('modal-login--show');
      modal.classList.add('modal-login--closed');
    });

    modalCloseBtnDesktop.addEventListener('click', (evt) => {
      evt.preventDefault();

      modal.classList.remove('modal-login--show');
      modal.classList.add('modal-login--closed');
    });
  },

  SubmitForm() {
    loginForm.addEventListener('submit', (evt) => {
      if (!loginNameField.value || !loginPasswordField.value) {
        evt.preventDefault();
      } else if (isStorageSupport) {
        localStorage.setItem('login-field', loginNameField.value);
      }
    });
  },

  Esc() {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        if (modal.classList.contains('modal-login--show')) {
          evt.preventDefault();

          modal.classList.remove('modal-login--show');
          modal.classList.add('modal-login--closed');
        }
      }
    });
  },

  init() {
    this.LoginBtn();
    this.ModalClose();
    this.SubmitForm();
    this.Esc();
  },
};

export default loginFormModal;
