import './styles/style.sass';

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


console.log('Hello...');
console.log('mode', process.env.NODE_ENV);


document.querySelectorAll('li.home_defect_button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('li.home_defect_button').forEach(defect_button => { defect_button.classList.remove('active') })
        button.classList.add('active');

        document.querySelectorAll('img.home_content_defect').forEach(image => { image.classList.remove('active') })

        let defect = this.getAttribute('defect'); 
        const defectImage = document.getElementById(defect);
        defectImage.classList.add('active');

        document.querySelectorAll('p.home_content_descr').forEach(description => { description.classList.remove('active') });
        document.querySelector(`[descr='${defect}']`).classList.add('active');
    });
});
