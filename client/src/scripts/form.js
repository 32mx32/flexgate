import { axiosInstance } from './axios';
import swal from 'sweetalert';

const form = document.getElementById('telegram_form');
const closeModal = document.querySelector('.hystmodal__close');

const sendData = async (data) => {
  try {
    await axiosInstance.post('/sendForm', data);
    swal({
      title: 'Успешно отправлено!',
      icon: 'success',
      timer: 2000,
    });
    form.reset();
    closeModal?.click();
    console.log(data);
  } catch (error) {
    swal({
      title: 'Произошла ошибка!',
      icon: 'error',
      timer: 2000,
    });
  }
};

const onSubmitForm = function (e) {
  e.preventDefault();
  const data = {
    name: this.inputUserName.value,
    tel: this.inputTelephoneNumber.value,
    model: this.inputModelMacbook.value,
    comment: this.inputComments.value.replace(/\r?\n/g, ""),
    checked: this.callbackToggle.checked,
  };
  console.log(data);
  sendData(data);
};

form.addEventListener('submit', onSubmitForm);
