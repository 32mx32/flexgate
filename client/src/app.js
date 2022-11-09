import './styles/style.sass';

import './images/icons/favicon/apple-touch-icon.png';
import './images/icons/favicon/favicon-32x32.png';
import './images/icons/favicon/favicon-16x16.png';
// import './images/icons/favicon/site.webmanifest';

import './images/icons/headerdot.svg';
import './images/icons/checked.svg';
import './images/icons/unchecked.svg';
import './images/icons/telegram.svg';
import './images/icons/instagram.svg';

import './images/home/macbook.png';
import './images/home/kenny.png';
import './images/home/kenny2.png';
import './images/home/kenny3.png';
import './images/home/kenny4.png';
import './images/home/kenny5.png';

import './images/questions/squircle.svg';
import './images/questions/bart_simpson.png';
import './images/questions/doc.png';
import './images/questions/smegol.png';
import './images/questions/storm_trooper.png';
import './images/questions/dimon.png';
import './images/questions/marilyn.png';

import './images/maps.png';


//события при выборе дефекта
document.querySelectorAll('li.home_defect_button').forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // function hideBorder() {
    //     document.querySelector('button#home_buy_button').style.cssText = "border: solid 0px #EB5B00; transition: border 0.1s linear;";
    // }
    // document.querySelector('button#home_buy_button').style.cssText = "border: solid 0.1px #EB5B00; transition: border 0.1s linear;";

    function hideBorder() {
        document.querySelector('button#home_buy_button').style.cssText = "background: none; transition: background 5s linear;";
    }
    document.querySelector('button#home_buy_button').style.cssText = "background: #EB5B00; transition: background 0.1s linear;";




    setTimeout(hideBorder, 300)



    document.querySelector('button#home_buy_button').classList.add('active');
    document.querySelector('button#home_buy_button').classList.remove('active');
    // document.querySelector('button#home_buy_button.bn5',':before').classList.add('hover')
    // console.log(document.querySelector('button#home_buy_button.bn5',':before').classList )

    document.querySelectorAll('li.home_defect_button').forEach((defect_button) => {
      defect_button.classList.remove('active');
    });
    button.classList.add('active');

    document.querySelectorAll('img.home_content_defect').forEach((image) => {
      image.classList.remove('active');
    });
    let defect = this.getAttribute('defect');
    document.getElementById(defect).classList.add('active');

    document.querySelectorAll('p.home_content_descr').forEach((description) => {
      description.classList.remove('active');
    });
    document.querySelector(`[descr='${defect}']`).classList.add('active');
  });
});

//анимация плавного появления элементов
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element_show');
    }
  });
}

let options = {
  threshold: [1],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element_animation');

for (let elm of elements) {
  observer.observe(elm);
}

//плавная прокрутка страницы
document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector('header').offsetHeight;
    const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
