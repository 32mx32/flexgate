import './styles/style.sass';

import './images/icons/favicon/apple-touch-icon.png';
import './images/icons/favicon/favicon-32x32.png';
import './images/icons/favicon/favicon-16x16.png';

import './images/icons/headerdot.svg';
import './images/icons/checked.svg';
import './images/icons/unchecked.svg';
import './images/icons/telegram.svg';
import './images/icons/instagram.svg';

import './images/home/macbook.png';
import './images/home/kenny_stripes.png';
import './images/home/kenny_stripes.webp';
import './images/home/kenny_flood.png';
import './images/home/kenny_flood.webp';
import './images/home/kenny_broken.png';
import './images/home/kenny_broken.webp';
import './images/home/kenny_nocam.png';
import './images/home/kenny_nocam.webp';
import './images/home/kenny_nopict.png';
import './images/home/kenny_nopict.webp';

import './images/questions/squircle.svg';
import './images/questions/bart_simpson.png';
import './images/questions/doc.png';
import './images/questions/smegol.png';
import './images/questions/storm_trooper.png';
import './images/questions/dimon.png';
import './images/questions/marilyn.png';

import './images/maps.png';

import './scripts/modal.js';
import './scripts/form.js';




// инициализация слайдера Flickity
var Flickity = require('flickity');
window.addEventListener('DOMContentLoaded', () => {
  var elem = document.querySelector('.questions_slider_mobile');
  var flkty = new Flickity( elem, {
    cellalign: 'right',
    // pageDots: false,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15,
    // freeScroll: true,
    wrapAround: true,
    // autoPlay: true
  });
});

console.log('screen.width -->', screen.width, 'screen.height -->', screen.height);





//события нажатии кнопки заказа в SECTION#HOME
document.querySelectorAll('#home_order_button').forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // вставляет выбранный дефект в форму
    document.querySelectorAll('.home_defect_button.active').forEach((defect_button_active) => {
      let string_content = defect_button_active.querySelector('h3').textContent;
      let span_len = defect_button_active.querySelector('span').textContent.length;
      let out_string = string_content.slice(0, -(span_len));
      // console.log(out_string);
      document.getElementById('inputComments').value = out_string + '\n';
    });

    // получает значение toggle
    // let callback_toggle = document.getElementById('callbackToggle');
    // callback_toggle.addEventListener('click', function(e) {
    //   console.log(callback_toggle.checked);
    // });
  });
});






//события нажатии кнопки заказа в SECTION#COMPARE
document.getElementById('compare_order_button').addEventListener('click', function(e) {

  // вставляет выбранный дефект в форму
  document.querySelectorAll('.compare_list.active').forEach((compare_list_active) => {
    let string_content = compare_list_active.textContent.replace(/\r?\n/g, "");
    // console.log(string_content);
    document.getElementById('inputComments').value = string_content + '\n';
  });
});






//события при выборе дефекта в #HOME
document.querySelectorAll('li.home_defect_button').forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

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

//события при выборе дефекта в #COMPARE
document.querySelectorAll('li.track_events,compare_list').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelectorAll('li.track_events,compare_list').forEach((select_defect) => {
      select_defect.classList.remove('active');
    });
    item.classList.add('active');
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

//отслеживание событий для umami
window.addEventListener('DOMContentLoaded', (event) => {
  // console.log('DOM fully loaded and parsed');

  let trackEvents = '';

  setTimeout(
    document.querySelectorAll('.track_events').forEach((item) => {
      item.addEventListener('click', function (e) {
        // e.preventDefault();
        if (item.tagName == 'LI') {
          trackEvents += item.textContent.replace(/\r?\n/g, '').replace(/^ +| +$|( ) +/g, '$1');
        }
        if (item.tagName == 'BUTTON') {
          trackEvents += item.textContent.replace(/\r?\n/g, '').replace(/^ +| +$|( ) +/g, '$1');
        }
        if (item.tagName == 'A') {
          trackEvents = item.textContent.replace(/\r?\n/g, '').replace(/^ +| +$|( ) +/g, '$1');
          // console.log(trackEvents);
          umami(trackEvents);
          trackEvents = '';
        }
        if (item.tagName == 'SECTION') {
          trackEvents += ' #' + item.id.toUpperCase();
          if (trackEvents[1] != '#') {
            umami(trackEvents);
            // console.log('setTimeOut --->', trackEvents);
          }
          trackEvents = '';
        }
      });
    }),
    50
  );
});

// // ждем полной загрузки страницы
// window.onload = () => {
//   // устанавливаем настройки
//   const options = {
//       // родитель целевого элемента - область просмотра
//       root: null,
//       // без отступов
//       rootMargin: '0px',
//       // процент пересечения - половина изображения
//       threshold: 0.5
//   }

//   // создаем наблюдатель
//   const observer = new IntersectionObserver((entries, observer) => {
//       // для каждой записи-целевого элемента
//       entries.forEach(entry => {
//           // если элемент является наблюдаемым
//           if (entry.isIntersecting) {
//               const lazyImg = entry.target
//               // выводим информацию в консоль - проверка работоспособности наблюдателя
//               console.log('lazyImg --->', lazyImg)
//               // меняем фон контейнера
//               lazyImg.style.background = 'deepskyblue'
//               // прекращаем наблюдение
//               observer.unobserve(lazyImg)
//           }
//       })
//   }, options)

//   // с помощью цикла следим за всеми img на странице
//   const arr = document.querySelectorAll('section')
//   arr.forEach(i => {
//       observer.observe(i)
//   })
// }
