let defectItem = document.querySelectorAll('.defect_list li');
let buyOrder = document.querySelector('.buy_order');
let formOrderInput = document.querySelector('#telegram_form .order input');

document.querySelector('.defect_list').addEventListener('mouseover', function (e) {
    if (e.target.nodeName == 'LI') {
        document.getElementById('bg_image').src = `${e.target.id}.png`;
        selectDefect = e.target.children[0].innerHTML;
    } else if (e.target.parentElement.nodeName == 'LI') {
        document.getElementById('bg_image').src = `${e.target.parentElement.id}.png`;
        selectDefect = e.target.innerHTML;
    }
});

document.querySelector('.defect_list').addEventListener('mouseout', function (e) {
    document.getElementById('bg_image').src = `${localStorage.getItem('selectImage')}.png`;
});

document.querySelector('.defect_list').addEventListener('click', function (e) {
    buyOrder.classList.add('hover');
    setTimeout(() => {
        buyOrder.classList.remove('hover');
    }, 1000);
    for (item of defectItem) {
        if (item.classList == 'active') {
            item.classList.remove('active');
        }
    }
    if (e.target.nodeName == 'LI') {
        document.getElementById('bg_image').src = `${e.target.id}.png`;
        e.target.classList.add('active');
        localStorage.setItem('selectDefect', e.target.children[0].innerHTML);
        localStorage.setItem('selectImage', e.target.id);
    } else if (e.target.parentElement.nodeName == 'LI') {
        document.getElementById('bg_image').src = `${e.target.parentElement.id}.png`;
        e.target.parentElement.classList.add('active');
        localStorage.setItem('selectDefect', e.target.innerHTML);
        localStorage.setItem('selectImage', e.target.parentElement.id);
    }
    formOrderInput.value = localStorage.getItem('selectDefect');
});
